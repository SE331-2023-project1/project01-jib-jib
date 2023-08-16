export interface StudentItem {
  id: number;
  name: string;
  surname: string;
  studentID: number;
  profileImage: string;
  courses: string[];
  professorId: number;
}

export interface AdviserItem {
  id: number;
  name: string;
  surname: string;
  professorID: number;
  profileImage: string;
}
