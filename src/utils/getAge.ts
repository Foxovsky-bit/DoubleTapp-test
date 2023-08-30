export function getAge(birthday:string) {

        const birthDate = new Date(birthday);
        const currentDate = new Date()

        let years = (currentDate.getFullYear() - birthDate.getFullYear());

        if (currentDate.getMonth() < birthDate.getMonth() ||
            currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
            years--;
        }

        return years;

}