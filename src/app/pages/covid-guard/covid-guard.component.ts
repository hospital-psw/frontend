import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';
import { Subject } from 'rxjs';
import { init } from 'aos';
import { PredictionService } from './services/prediction.service';
import { PredictionBody } from './interface/PredictionBody';
import { ModalDialogService } from 'src/app/shared/modal-dialog/modal-dialog.service';
import { da } from 'date-fns/locale';
import { CoronaResultsData } from 'src/app/shared/modal-dialog/interface/CoronaReultsData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid-guard',
  templateUrl: './covid-guard.component.html',
  styleUrls: ['./covid-guard.component.scss'],
})
export class CovidGuardComponent implements OnInit {
  _observer: IntersectionObserver;
  @ViewChild('stomach') fever: ElementRef;

  symptoms: Array<string>;
  conditions: Array<string>;
  activities: Array<string>;
  isLoading: boolean = false;
  reachedEnd: boolean = false;
  data: PredictionBody;

  constructor(
    private predictionService: PredictionService,
    private modalService: ModalDialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    init();
    this.symptoms = [];
    this.conditions = [];
    this.activities = [];
    this.createData();
    this.predictionService.train().subscribe((res) => {});
  }

  createData() {
    this.data = {
      fever: false,
      abroad_travel: false,
      asthma: false,
      attended_large_gathering: false,
      breathing_problems: false,
      chronic_lung_disease: false,
      contact_with_covid: false,
      diabetes: false,
      dry_cough: false,
      family_working_in_public_exposed_places: false,
      fatigue: false,
      gastrointestinal: false,
      headache: false,
      heart_disease: false,
      hyper_tension: false,
      running_nose: false,
      sore_throat: false,
      visited_public_exposed_places: false,
    };
  }

  ngAfterViewInit(): void {
    let element = new ElementRef(document.getElementById('hd'));
    let element1 = new ElementRef(document.getElementById('hs'));
    this.createAndObserve([element, element1]);
  }

  scrollToElement($element: any): void {
    const element = document.querySelector($element);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  advScrollToElement($element: any): void {
    this.scrollToElement('#contact');
    if ($element === '#contact') {
      return;
    }

    this.scrollToElement($element);
  }

  summaryScroll(): void {
    this.scrollToElement('#contact');
    setTimeout(() => {
      this.scrollToElement('#finishing-steps');
    }, 800);
  }

  getFirstParagraph(): string {
    return (
      'Welcome to our COVID-19 detection system! Our system is designed to quickly and accurately determine whether a patient has COVID-19 or not.' +
      'Our system utilizes advanced AI algorithms and machine learning techniques to analyze symptoms, medical history, and other relevant data to provide a diagnosis in real-time.'
    );
  }

  getSecondParagraph(): string {
    return (
      'The system is highly accurate and has been validated by medical experts.' +
      'It is also constantly updated to reflect the latest developments in COVID-19 diagnosis and treatment.' +
      'The system is designed to asist in the fight against the Corona virus by providing rapid and accurate diagnosis and helping to ensure that patients receive the appropriate care as soon as possible.'
    );
  }

  getThirdParagraph(): string {
    return 'Moving through this interactive form, fill in your information about symptoms, chronical conditions, and your activity, so that our system can identify whether you are a infected with COVID-19 virus.';
  }

  getSymptomParagraph(): string {
    return 'These are the most common symptoms of the corona virus. Please enter your symptoms as accurately as possible so that the system can assess your current condition as accurately as possible. ';
  }

  getSymptomParagraph2(): string {
    return 'Also, the corona virus can manifest itself without symptoms, which does not mean that you should not fill out the further steps in the interactive form.';
  }

  makeActive(name: string) {
    let element = document.getElementById(name);
    if (element?.classList.contains('active')) {
      element?.classList.remove('active');
      return;
    }
    element?.classList.add('active');
  }

  selectSymptom(name: string) {
    this.makeActive(name);
    if (this.symptoms.includes(name)) {
      this.symptoms = this.symptoms.filter((e) => e !== name);
      return;
    }

    this.symptoms.push(name);
  }

  selectCondition(name: string) {
    this.makeActive(name);
    if (this.conditions.includes(name)) {
      this.conditions = this.conditions.filter((e) => e !== name);
      return;
    }

    this.conditions.push(name);
  }

  selectActivity(name: string) {
    this.makeActive(name);
    if (this.activities.includes(name)) {
      this.activities = this.activities.filter((e) => e != name);
      if (this.activities.length === 0) this.reachedEnd = false;
      return;
    }

    this.activities.push(name);
    this.reachedEnd = true;
  }

  createAndObserve(element: ElementRef[]) {
    const options = {
      root: null,
      threshold: 0.1,
    };

    this._observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        // observer.unobserve(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add('typing');
          return;
        }

        entry.target.classList.remove('typing');
      });
    }, options);
    element.forEach((el) => this._observer.observe(el.nativeElement));
  }

  setUpData() {
    this.symptoms.forEach((el) => {
      switch (el) {
        case 'Fever':
          this.data.fever = true;
          break;
        case 'Cough':
          this.data.dry_cough = true;
          break;
        case 'Headache':
          this.data.headache = true;
          break;
        case 'Breathing problems':
          this.data.breathing_problems = true;
          break;
        case 'Sore throat':
          this.data.sore_throat = true;
          break;
        case 'Stomachache':
          this.data.gastrointestinal = true;
          break;
        case 'Smell loss':
          this.data.running_nose = true;
          break;
      }
    });

    this.conditions.forEach((el) => {
      switch (el) {
        case 'Hypertension':
          this.data.hyper_tension = true;
          break;
        case 'Asthma':
          this.data.asthma = true;
          break;
        case 'Kidney disease':
          this.data.family_working_in_public_exposed_places = true;
          break;
        case 'Diabetes':
          this.data.diabetes = true;
          break;
        case 'Lung disease':
          this.data.chronic_lung_disease = true;
          break;
        case 'Obesity':
          this.data.heart_disease = true;
          break;
      }
    });

    this.activities.forEach((el) => {
      switch (el) {
        case 'Travel abroad':
          this.data.abroad_travel = true;
          break;
        case 'Public transport':
          this.data.visited_public_exposed_places = true;
          break;
        case 'Large gatherings':
          this.data.attended_large_gathering = true;
          break;
        case 'Contact with infected':
          this.data.contact_with_covid = true;
          break;
      }
    });
  }

  leavePage() {
    this.router.navigate(['/app/home']);
  }

  getResults() {
    this.isLoading = true;
    this.setUpData();
    this.predictionService.predict(this.data).subscribe((response) => {
      this.setLoaderTimeout();
      console.log(response);
      const data: CoronaResultsData = {
        prediction: response.prediction_str,
        confidence: response.confidence,
      };
      this.modalService.openCoronaResultsDialog(data).afterClosed().subscribe(()=>{
        this.router.navigate(['/app/home'])
      })
      
    });
  }

  private setLoaderTimeout() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  }
}
