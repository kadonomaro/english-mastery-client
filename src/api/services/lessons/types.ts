type LessonLevel = "easy" | "medium" | "hard";

export type Lesson = {
    id: string;
    name: string;
    level: LessonLevel;
};

export type LessonDetail = {
    id: string;
    name: string;
    translate: string;
    completed: boolean;
};
