import { DocumentData, Timestamp } from "@angular/fire/firestore"

export interface Post extends DocumentData{
  author: string,
  value: string,
  createdAt: Timestamp,
  contentType: "plaintext" | "image" | "file",
  data() : Post;
}