type Sound = "success" | "error" | "finish";

class SoundService {
    private audio: Partial<Record<Sound, HTMLAudioElement>>;

    constructor() {
        this.audio = {
            success: new Audio(`./static/sounds/success.mp3`),
            error: new Audio(`./static/sounds/error.mp3`),
            finish: new Audio(`./static/sounds/finish.mp3`),
        };
    }

    play(sound: Sound) {
        this.audio[sound]?.play();
    }
}

export const soundService = new SoundService();
