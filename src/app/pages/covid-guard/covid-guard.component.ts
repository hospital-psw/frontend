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

  ngOnInit(): void {
    init();
    this.symptoms = [];
    this.conditions = [];
    this.activities = [];
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
    console.log($element);
    this.scrollToElement('#contact');
    if ($element === '#contact') {
      return;
    }

    this.scrollToElement($element);
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
      console.log('USAO SAM OVDE');
      this.activities = this.activities.filter((e) => e != name);
      return;
    }

    this.activities.push(name);
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

  getResults(data: any) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 6000);
  }
}
