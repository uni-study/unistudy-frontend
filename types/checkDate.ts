export const checkDate: (arg0: string) => boolean = (date) => {
    const yearLength = 4;
    const monthLength = 2;
    const dayLength = 2;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (date.length === yearLength + monthLength + dayLength + 2) {
        if (!dateRegex.test(date)) {
            return false;
        }
    } else if (date.length > yearLength + monthLength + dayLength + 2) {
        return false;
    }

    return true;
};
