class DateUtility {
    GetBasePath(today){
        let yyyy = today.getFullYear()
        let mm = this.GetMonth(today)
        return `./${yyyy}/${yyyy}${mm}`
    }

    GetMMDD(currentDate){
        return `${this.GetMonth(currentDate)}${this.GetDate(currentDate)}`
    }

    GetWeekBegin(today){
        let beginDate = this.AddDays(today,1 - today.getDay())
        return this.GetMMDD(beginDate)
    }

    GetWeekEnd(today){
        let beginDate = this.AddDays(today,1 - today.getDay())
        let endDate = this.AddDays(beginDate, 4)
        return this.GetMMDD(endDate)
    }
    

    AddDays(date, days) {
        return new Date(date.getFullYear(),date.getMonth(),date.getDate() + days)
    }

    GetWeeklyFileName(today){
        return `${this.GetWeekBegin(today)}-${ this.GetWeekEnd(today)}`
    }

    GetReportPath(today,type){
        switch (type){
            case 'month': return  this.GetMonthlyReportPath(today)
            case 'week': return this.GetWeeklyReportPath(today)
        }
    }

    GetWeeklyReportPath(today){
        return `${this.GetBasePath(today)}/${this.GetWeeklyFileName(today)}.md`
    }
    
    GetMonthlyReportPath(today){
        return `${this.GetBasePath(today)}/readme.md`
    }

    GetMonth(today){
        return this.Left(`0${today.getMonth()+1}`,2)
    }
    GetDate(today){
        return this.Left(`0${today.getDate()}`,2)
    }
    Left(str,num){
        return str.substring(str.length-num,str.length)
    }
}

export default DateUtility