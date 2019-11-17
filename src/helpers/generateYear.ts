export default () => {
    const days = [];
    const now = new Date();
    const dayIncrementer = new Date();
    const weeks = [];
    const weekSize = 7;

    for (dayIncrementer.setDate(now.getDate() - 364); dayIncrementer <= now; dayIncrementer.setDate(dayIncrementer.getDate() + 1)) {
        const dayIncrement = new Date(dayIncrementer);
        let monthLabel = false;
        dayIncrement.setHours(0,0,0,0); // Set the time to midnight, this helps with tests and comparative matches
        if (days.length > 1 && dayIncrement.getMonth() !== days[days.length -1].date.getMonth()) {
            monthLabel = true;
        }
        days.push({date: dayIncrement, monthLabel: monthLabel});
    }

    for (let index = 0; index<days.length; index+=weekSize) {
        weeks.push(days.slice(index, index+weekSize));
    }
    
    return weeks;
};