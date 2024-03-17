import { LessonsService } from "@/api/services/lessons";

class ApiService {
    get lessons() {
        return new LessonsService();
    }
}

export const api = new ApiService();
