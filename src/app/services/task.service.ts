import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import Task from "../models/task";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'http://localhost:5000/tasks'
  constructor(private httpClient: HttpClient) { }

  getTasks():Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.httpClient.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.url, task, httpOptions);
  }
}
