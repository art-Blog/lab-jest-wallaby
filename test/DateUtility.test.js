import DateUtility from '../src/DateUtility'

describe('DateUtility', () => {
    let sut = new DateUtility()
    it('GetBasePath', () => {
        var today = new Date(2020,10,1)
        var actual = sut.GetBasePath(today)
        expect(actual).toBe('./2020/202011')
    });

    it('GetMMDD', () => {
        var today = new Date(2020,10,25)
        var actual = sut.GetMMDD(today)
        expect(actual).toBe('1125')
    });

    it('GetWeekBegin', () => {
        var today = new Date(2020,10,24)
        var actual = sut.GetWeekBegin(today)
        expect(actual).toBe('1123')
    });

    it('GetWeekEnd', () => {
        var today = new Date(2020,10,24)
        var actual = sut.GetWeekEnd(today)
        expect(actual).toBe('1127')
    });

    it('GetWeeklyFileName', () => {
        var today = new Date(2020,10,24)
        var actual = sut.GetWeeklyFileName(today)
        expect(actual).toBe('1123-1127')
    });

    it('GetWeeklyReportPath', () => {
        var today = new Date(2020,10,24)
        var actual = sut.GetWeeklyReportPath(today)
        expect(actual).toBe('./2020/202011/1123-1127.md')
    });

    it('GetMonthlyReportPath', () => {
        var today = new Date(2020,10,24)
        var actual = sut.GetMonthlyReportPath(today)
        expect(actual).toBe('./2020/202011/readme.md')
    });
});