type Sound = "success" | "error" | "finish";
type Audio = Partial<Record<Sound, HTMLAudioElement>>;

class SoundService {
    private audio: Audio;

    constructor() {
        this.audio = {
            success: new Audio(`/static/sounds/success.mp3`),
            error: new Audio(`/static/sounds/error.mp3`),
            finish: new Audio(`/static/sounds/finish.mp3`),
        };
    }

    play(sound: Sound) {
        this.stop(sound);
        this.audio[sound]?.play();
    }

    stop(sound: Sound) {
        if (this.audio[sound]) {
            this.audio[sound]?.pause();
            this.audio[sound]!.currentTime = 0;
        }
    }
}

export const soundService = new SoundService();
