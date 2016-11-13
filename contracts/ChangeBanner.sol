pragma solidity ^0.4.0;
contract ChangeBanner {

    struct Banner {
        string title;
        uint fontSize;
        string color;
    }
    uint voteCount = 0;
    
    mapping(uint => Banner)banners;

    /// Create a new ChangeBanner 
    function ChangeBanner() {
    }
    
    /// get the $(title) defining the new banner
    function defineBanner(string title) payable{
        if (checkSanity(title)){
            makeDonation();
            Banner memory b;
            b.title = title;
            banners[voteCount++] = b;
        }else{
            // should call a refund method
            if(!msg.sender.send(msg.value))throw;
        }
    }
    
    function makeDonation(){
        uint total = msg.value;
        address o1 = 0x64eD936be8e205D999021cF80a8141b54eb9ADc6;
        address o2 = 0x944DE8f9211A3870e3579D14931c9E8D90b08349;
        uint prop = total/2;
        if(!o1.send(prop) && o2.send(prop)) throw;
        // address[] recipients = [
        //     0x64eD936be8e205D999021cF80a8141b54eb9ADc6, 
        //     0x944DE8f9211A3870e3579D14931c9E8D90b08349];
        // uint prop = total/recipients.length;
        // for(uint ii=0;ii<recipients.length;++ii){
        //     recipients[ii].send(prop);
        // }
    }
    
    /// return current Banner
    function getCurrentBanner() returns(string msg){
        if(voteCount==0)return "Initial Title";
        else return banners[voteCount-1].title;
    }

    /// check if the new $(title) is "sane"
    function checkSanity(string sentence) returns(bool cs){
        // if(sentence("fuck")) return false;
        // else return true;
        return true;
    }

}
