import { Timestamp } from '@angular/fire/firestore'

export interface InvaUser {
  active: boolean,
  name: string,
  createdAt: Timestamp,
  role: Array<string>,
}