export function prettyDate(date) {
    let d = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if(date != "Present") {
        d = new Date(date);
        return(months[d.getMonth()] + " " + d.getFullYear());
    } else {
        return(date);
    }
}
