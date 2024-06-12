
function cronometro(interval){
    
    this.InicTime;
    this.ActualTime;
    this.nombreExp;
    this.AuxTime;
    this.Old;
    
    this.run=false;
    this.Hours;
    this.Minutes;
    this.Seconds;
    
    this.initClock= function(){
        this.resetClock();
        this.showClock();
        this.InicTime = new Date();
        this.Hours=0;
        this.Minutes=0;
        this.Seconds=0;
    }
    
    this.playClock= function(){
        if (this.run){
            this.ActualTime=new Date();
            this.AuxTime=new Date();
            this.AuxTime.setTime(this.ActualTime.getTime()-this.InicTime.getTime()+this.Old.getTime());
            this.Seconds=this.AuxTime.getSeconds();
            this.Minutes=this.AuxTime.getMinutes();
            this.Hours=this.AuxTime.getHours();
            
            this.showClock();
            setTimeout("crono.playClock()", interval);
        }
    }
    
    this.showClock= function(){
        tiempo="";
        
        if (this.Hours < 10) tiempo += "0"
        tiempo+=this.Hours+":";
        if (this.Minutes < 10) tiempo += "0"
        tiempo+=this.Minutes+":";
        if (this.Seconds < 10) tiempo += "0" 
        tiempo+=this.Seconds;
        
        $("#temps").val(tiempo);
    }
    
    this.pauseClock= function(){
        if (!this.run) {
            this.run = true;
            this.InicTime = new Date();
            this.ActualTime = this.InicTime;
            this.playClock();
        }
        else {
            this.run = false;
            this.saveOld();
        }
    }
    
    this.stopClock= function(){
        this.run = false;
    }
    
    this.resetClock= function(){
        if (this.run) {this.run = false;}

        this.Hours = 0;
        this.Minutes = 0;
        this.Seconds = 0;
        this.Old=new Date();
        this.Old.setTime(0);
        this.Old.setHours(0, 0, 0, 0);
    }
    
    this.saveOld= function(){
        this.Old.setTime(this.ActualTime.getTime() - this.InicTime.getTime() + this.Old.getTime());
        //this.Hours = 0;
        //this.Minutes = 0;
        //this.Seconds = 0;
    }
    
    this.total= function(){
        return this.Hours*3600+this.Minutes*60+this.Seconds;
    }
}