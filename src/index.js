class CountdownTimer{
    constructor(selector, data){
        this.timerElem = document.querySelector(selector)
        this.data = data
        this.start()
    }
    

    start(){
        this.update()
        this.interval = setInterval(() => this.update(), 1000)
    }

    update(){
        const time = this.data.getTime() - Date.now();

        if(time === 0){
            clearInterval(this.interval)
            return
        }

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);



        this.timerElem.querySelector('[data-value="days"]').textContent = days.toString().padStart(2, "0");
        this.timerElem.querySelector('[data-value="hours"]').textContent = hours.toString().padStart(2, "0");
        this.timerElem.querySelector('[data-value="mins"]').textContent = mins.toString().padStart(2, "0");
        this.timerElem.querySelector('[data-value="secs"]').textContent = secs.toString().padStart(2, "0");

    }
}

new CountdownTimer("#timer-1", new Date("Jul 17, 2025"));


// /*
//  * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
//  * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
//  */
// // const days = Math.floor(time / (1000 * 60 * 60 * 24));
// /*
//  * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
//  * залишку% і ділимо його на кількість мілісекунд в одній годині
//  * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
//  */
// // const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
//  * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
//  */
// // const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
//  * миллисекунд в одной секунде (1000)
//  */
// // const secs = Math.floor((time % (1000 * 60)) / 1000);







