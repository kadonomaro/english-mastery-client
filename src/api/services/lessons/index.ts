import { Lesson, LessonDetail } from "@/api/services/lessons/types.ts";

export class LessonsService {
    getAll() {
        return Promise.resolve(lessonsList);
    }

    getOne(id: string) {
        return Promise.resolve(lessons[id]);
    }
}

const lessonsList: Lesson[] = [
    { id: "0001", name: "Начало", level: "easy" },
    { id: "0002", name: "Животные", level: "easy" },
    { id: "0003", name: "Цвета", level: "medium" },
    { id: "0004", name: "Офис", level: "hard" },
];

const lessons: Record<string, LessonDetail[]> = {
    "0001": [
        { id: "001", name: "they", translate: "они", completed: false },
        { id: "002", name: "you", translate: "ты", completed: false },
        { id: "003", name: "he", translate: "он", completed: false },
        { id: "004", name: "she", translate: "она", completed: false },
        { id: "005", name: "we", translate: "мы", completed: false },
        { id: "006", name: "boy", translate: "мальчик", completed: false },
        { id: "007", name: "girl", translate: "девочка", completed: false },
        { id: "008", name: "man", translate: "мужчина", completed: false },
        { id: "009", name: "woman", translate: "женщина", completed: false },
        { id: "010", name: "age", translate: "возраст", completed: false },
    ],
    "0002": [
        { id: "001", name: "cat", translate: "кошка", completed: false },
        { id: "002", name: "dog", translate: "собака", completed: false },
        { id: "003", name: "rat", translate: "крыса", completed: false },
        { id: "004", name: "bear", translate: "медведь", completed: false },
        { id: "005", name: "fish", translate: "рыба", completed: false },
        { id: "006", name: "rabbit", translate: "кролик", completed: false },
        { id: "007", name: "pig", translate: "свинья", completed: false },
        { id: "008", name: "cow", translate: "корова", completed: false },
        { id: "009", name: "bird", translate: "птица", completed: false },
        { id: "010", name: "lion", translate: "лев", completed: false },
    ],
    "0003": [
        { id: "001", name: "red", translate: "красный", completed: false },
        { id: "002", name: "green", translate: "зелёный", completed: false },
        { id: "003", name: "blue", translate: "синий", completed: false },
        { id: "004", name: "white", translate: "белый", completed: false },
        { id: "005", name: "black", translate: "чёрный", completed: false },
        { id: "006", name: "yellow", translate: "жёлтый", completed: false },
        { id: "007", name: "brown", translate: "коричневый", completed: false },
        { id: "008", name: "orange", translate: "оранжевый", completed: false },
        { id: "009", name: "grey", translate: "серый", completed: false },
        { id: "010", name: "violet", translate: "фиолетовый", completed: false },
    ],
    "0004": [
        { id: "001", name: "pen", translate: "ручка", completed: false },
        { id: "002", name: "pencil", translate: "карандаш", completed: false },
        { id: "003", name: "desk", translate: "рабочий стол", completed: false },
        { id: "004", name: "printer", translate: "принтер", completed: false },
        { id: "005", name: "ruler", translate: "линейка", completed: false },
        { id: "006", name: "chair", translate: "стул", completed: false },
        { id: "007", name: "paper", translate: "бумага", completed: false },
        { id: "008", name: "ink", translate: "чернила", completed: false },
        { id: "009", name: "glue", translate: "клей", completed: false },
        { id: "010", name: "eraser", translate: "резинка", completed: false },
    ],
};
