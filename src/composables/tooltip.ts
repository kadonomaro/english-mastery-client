import { ref } from "vue";

export function useTooltip() {
    const tooltip = ref(false);

    const onTooltipEnter = () => {
        tooltip.value = true;
    };

    const onTooltipLeave = () => {
        tooltip.value = false;
    };

    return { tooltip, onTooltipEnter, onTooltipLeave };
}
