class Mario extends GameObject {

    hitCheck() {
        //충돌체크
        for (let i = 0; i < brickArray.length; i++) {
            let result = collisionCheck(this, brickArray[i]);

            if (result) {
                this.y = brickArray[i].y - (this.height);
            }
        }

    }

    // sensorTick(){
    //     this.leftSide.x=this.x-1;
    //     this.rightSide.x=this.x+this.width;
    //     this.topSide=(this.x+(this.width-30)/2);
    //     this.bottomSide=(this.x+(this.width-30)/2);

    //     this.leftSide.y=(this.height-50)/2;
    //     this.rightSide.y=(this.height-50)/2;
    //     this.topSide.y=(this.y-1);
    //     this.bottomSide.y=(this.y+this.height);
    // }

    setSensor(){
        this.leftSide.x=this.x-1;
        this.rightSide.x=this.x+this.width;
        this.topSide.x=this.x+10;
        this.bottomSide.x=thisx+10;

        this.leftSide.y=this.y+10;
        this.rightSide.y=this.y+10;
        this.topSide.y=this.y-1;
        this.bottomSide.y=this.y+1;
    }

    //부모인 GameObject 에게 물려받은 재산 중 tick() 메서드는 현재 마리오의 목표와 맞지 않는다.
    //이때 개발자는 부모에게 물렵다은 메서드를 자기만의 코드로 업그레이드할 수 있는데, 
    //이러한 메서드 정의 기법을 가리켜 오버라이딩(OverRiding) 이라 한다.
    tick() {
        this.velY += g;
        //console.log(this.velY);

        if (this.velY > 8) {
            this.velY = 8;
        }

        this.x += this.velX;
        this.y += this.velY;

        this.hitCheck();
        this.setSensor();
    }



}