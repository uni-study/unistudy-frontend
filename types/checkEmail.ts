export const checkEmail: (arg0: string) => boolean = (email) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!emailRegex.test(email)) {
        alert("이메일 형식이 올바르지 않습니다.");
        return false;
    }
    return true;
};
