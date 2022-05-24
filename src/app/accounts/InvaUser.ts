import { User } from '@angular/fire/auth'
import { Timestamp } from '@angular/fire/firestore'

interface InvaUser extends User {
  active: boolean,
  name: string,
  createdAt: Timestamp,
  role: Array<string>,
}
