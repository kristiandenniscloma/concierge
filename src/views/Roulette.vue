<template>
    <div class="container">
        <div class="spinBtn">Spin</div>
        <div class="wheel">
            <div class="number" style="--i:1;--clr:#db7093;">
                <span>100</span>
            </div>
            <div class="number" style="--i:2;--clr:#20b2aa;">
                <span>1</span>
            </div>
            <div class="number" style="--i:3;--clr:#d63e92;">
                <span>50</span>
            </div>
            <div class="number" style="--i:4;--clr:#daa520;">
                <span>0</span>
            </div>
            <div class="number" style="--i:5;--clr:#ff340f;">
                <span>1000</span>
            </div>
            <div class="number" style="--i:6;--clr:#ff7f50;">
                <span>10</span>
            </div>
            <div class="number" style="--i:7;--clr:#3cb371;">
                <span>5</span>
            </div>
            <div class="number" style="--i:8;--clr:#4169e1;">
                <span>20</span>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    mounted() {
        let wheel = document.querySelector('.wheel');
        let spinBtn = document.querySelector('.spinBtn');
        

        spinBtn.onclick = function(){
            wheel.classList.add('remove-transition');
            

            setTimeout(function(){
                spin();
            }, 500);
        }

        function spin(){
            //let value = Math.ceil(Math.random() * 3600);
            /*
                100 = 360
                20 = 45
                5 = 90
                10 = 135
                1000 = 180
                0 = 225
                50 = 270
                1 = 315
            */
            wheel.classList.remove('remove-transition');

            const winSlotAngle = 225
            let value = 1440 + winSlotAngle;

            console.log('spin');
            wheel.style.transform = "rotate(" + value + "deg)";
            value += Math.ceil(Math.random() * 3600);
        }
    }
}

</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #333 !important;
    }
    header{
        display: none !important;
    }
    .container{
        position: relative;
        width: 400px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container .spinBtn{
        position: absolute;
        width: 60px;
        height: 60px;
        background: #fff;
        border-radius: 50%;
        z-index: 10;
        display: flex;
        justify-content: center;    
        align-items: center;
        text-transform: uppercase;
        font-weight: 600;
        color: #333;
        letter-spacing: 0.1em;
        border: 4px solid rgba(0,0,0,0.75);
        cursor: pointer;
        user-select: none;
    }
    .container .spinBtn::before{
        content: '';
        position: absolute;
        top: -28px;
        width: 20px;
        height: 30px;
        background: #fff;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    .container .wheel{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #333;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 0 5px #333,
        0 0 0 15px #fff,
        0 0 0 18px #111;
        transition: transform 5s ease-in-out;
    }
    .container .wheel .number{
        position: absolute;
        width: 50%;
        height: 50%;
        background: var(--clr);
        transform-origin: bottom right;
        transform: rotate(calc(45deg * var(--i)));
        clip-path: polygon(0 0, 56% 0, 100% 100%, 0 56%);
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }

    .container .wheel .number span{
        position: relative;
        transform: rotate(45deg);
        font-size: 2em;
        font-weight: 700;
        color: #fff;
        text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.15);
    }

    .remove-transition{
        transition: transform 0s !important;
        transform: rotate(0deg)  !important;
        
    }
</style>

