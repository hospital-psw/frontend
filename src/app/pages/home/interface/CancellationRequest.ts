import { CancellationInfo } from'./CancellationInfo'

export interface CancellationRequest{
    cancellationInfo: CancellationInfo,
    appointmentId: number

}