import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
    console.log(`the dateString is ${dateString}`);
    if (dateString !== undefined) {
        
        const date = parseISO(dateString);
        console.log(`the date has been converted to:`);
        console.log(date);
        return <time dateTime={date}>{format(date, 'LLLL d, yyyy')}</time>;
    } else {
        console.log(`there is no date associated with this post`);
        return <></>;
    }

}