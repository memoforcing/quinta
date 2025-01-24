var armazen1, armazen2, armazenConc, armazenDia, armazenMes, armazenAno, armazenn1, armazenn2, armazenn3, armazenn4, armazenn5;
var armazen1a, armazen2a, armazenConca, armazenDiaa, armazenMes, armazenAnoa, armazenn1a, armazenn2a, armazenn3a, armazenn4a, armazenn5a;

let TUDO = "";
let armazen2ArrayVeryTudo = [];
let armazen2ArrayTudo = [];
let armazenGlobal = [];
const armazenFim = ")";
const virgula = ","
const sep = " ";  
const parenth = ");";

function inserts(){
   quinaone = "insert into quina (concurso, dia, mes, ano, n1, n2, n3, n4, n5) values ("
   armazen1 = quinaone;
//   console.log(armazen1);
   armazen2 = quinaTextArea.value;
//   console.log(armazen2);
   slicing();
}

function slicing(){
    armazen2ArrayTudo = armazen2;
    console.log("longueur is " + armazen2.length);
   
        for(i = 0; i <= armazen2.length; i++){       
            if (i == 4){
              armazenConc = armazen2ArrayTudo.slice(0, i);                   
            }
           
            if (i == 9){
                armazenDia = armazen2ArrayTudo.slice(7, i);    
                console.log("armazenDia = " + armazenDia);   
              }      
           if (i == 12){
              armazenMes = armazen2ArrayTudo.slice(10, i);
              console.log("armazenMes = " + armazenMes);
              }
            if (i == 17){
              armazenAno = armazen2ArrayTudo.slice(13, i);    
              console.log("armazenAno = " + armazenAno);   
              }          

              if (i == 22){
                armazenn1 = armazen2ArrayTudo.slice(20, i);
                console.log("armazenn1 = " + armazenn1);
              }
              if (i == 25){
                  armazenn2 = armazen2ArrayTudo.slice(23, i);    
                  console.log("armazenn2 = " + armazenn2);   
              }      
              if (i == 28){
                armazenn3 = armazen2ArrayTudo.slice(26, i);
                 console.log("armazenn3 = " + armazenn3);
              }
              if (i == 31){
                armazenn4 = armazen2ArrayTudo.slice(29, i);    
                console.log("armazenn4 = " + armazenn4);   
              }       
              if (i == 34){
                armazenn5 = armazen2ArrayTudo.slice(32, i);    
                console.log("armazenn5 = " + armazenn5);  
                TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                armazenn4 + virgula + sep + armazenn5 + parenth + sep;
                //console.log("TUDO is " + TUDO);   
              }      
              //------------------------------------------------------------------------    1
              if (i == 39){ // +5
                armazenConc = armazen2ArrayTudo.slice(35, i);// -4                   
              }          
              if (i == 44){ // +5
                armazenDia = armazen2ArrayTudo.slice(42, i);     
                          
              }      
              if (i == 47){ // +3
                armazenMes = armazen2ArrayTudo.slice(45, i); // -2    
                          
              }       
              if (i == 52){ //+5
                armazenAno = armazen2ArrayTudo.slice(48, i); // -4    
                         
              }      
              if (i == 57){  // +5
                armazenn1 = armazen2ArrayTudo.slice(55, i);     //-2
                         
              }      
              if (i == 60){ // +3
                armazenn2 = armazen2ArrayTudo.slice(58, i);    //-2 
                         
              }  
              if (i == 63){ // +3
                armazenn3 = armazen2ArrayTudo.slice(61, i);    //-2  
                        
              }     
              if (i == 66){ // +3
                armazenn4 = armazen2ArrayTudo.slice(64, i);     //-2
                     
              }    
              if (i == 69){ // +3
                armazenn5 = armazen2ArrayTudo.slice(67, i);     //-2
                TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                armazenn4 + virgula + sep + armazenn5 + parenth + sep;
              }         

              //------------------------------------------------------------------------    2
              if (i == 74){ // +5
                armazenConc = armazen2ArrayTudo.slice(70, i);// -4                   
              }          
              if (i == 79){ // +5
                armazenDia = armazen2ArrayTudo.slice(77, i); // -2    
                          
              }      
              if (i == 82){ // +3
                armazenMes = armazen2ArrayTudo.slice(80, i); // -2    
                          
              }       
              if (i == 87){ //+5
                armazenAno = armazen2ArrayTudo.slice(83, i); // -4    
                         
              }      
              if (i == 92){  // +5
                armazenn1 = armazen2ArrayTudo.slice(90, i);     //-2
                         
              }      
              if (i == 95){ // +3
                armazenn2 = armazen2ArrayTudo.slice(93, i);    //-2 
                         
              }  
              if (i == 98){ // +3
                armazenn3 = armazen2ArrayTudo.slice(96, i);    //-2  
                        
              }     
              if (i == 101){ // +3
                armazenn4 = armazen2ArrayTudo.slice(99, i);     //-2
                     
              }    
              if (i == 104){ // +3
                armazenn5 = armazen2ArrayTudo.slice(102, i);     //-2
                TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                armazenn4 + virgula + sep + armazenn5 + parenth + sep;
              }   
              
                 //------------------------------------------------------------------------    3
              if (i == 109){ // +5
                armazenConc = armazen2ArrayTudo.slice(105, i);// -4                   
              }          
              if (i == 114){ // +5
                armazenDia = armazen2ArrayTudo.slice(112, i); // -2    
                          
              }      
              if (i == 117){ // +3
                armazenMes = armazen2ArrayTudo.slice(115, i); // -2    
                          
              }       
              if (i == 122){ //+5
                armazenAno = armazen2ArrayTudo.slice(118, i); // -4    
                         
              }      
              if (i == 127){  // +5
                armazenn1 = armazen2ArrayTudo.slice(125, i);     //-2
                         
              }      
              if (i == 130){ // +3
                armazenn2 = armazen2ArrayTudo.slice(128, i);    //-2 
                         
              }  
              if (i == 133){ // +3
                armazenn3 = armazen2ArrayTudo.slice(131, i);    //-2  
                        
              }     
              if (i == 136){ // +3
                armazenn4 = armazen2ArrayTudo.slice(134, i);     //-2
                     
              }    
              if (i == 139){ // +3
                armazenn5 = armazen2ArrayTudo.slice(137, i);     //-2
                TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                armazenn4 + virgula + sep + armazenn5 + parenth + sep;
              }         

                  
                 //------------------------------------------------------------------------    4
                 if (i == 144){ // +5
                  armazenConc = armazen2ArrayTudo.slice(140, i);// -4                   
                }          
                if (i == 149){ // +5
                  armazenDia = armazen2ArrayTudo.slice(147, i); // -2    
                            
                }      
                if (i == 152){ // +3
                  armazenMes = armazen2ArrayTudo.slice(150, i); // -2    
                            
                }       
                if (i == 157){ //+5
                  armazenAno = armazen2ArrayTudo.slice(153, i); // -4    
                           
                }      
                if (i == 162){  // +5
                  armazenn1 = armazen2ArrayTudo.slice(160, i);     //-2
                           
                }      
                if (i == 165){ // +3
                  armazenn2 = armazen2ArrayTudo.slice(163, i);    //-2 
                           
                }  
                if (i == 168){ // +3
                  armazenn3 = armazen2ArrayTudo.slice(166, i);    //-2  
                          
                }     
                if (i == 171){ // +3
                  armazenn4 = armazen2ArrayTudo.slice(169, i);     //-2
                       
                }    
                if (i == 174){ // +3
                  armazenn5 = armazen2ArrayTudo.slice(172, i);     //-2
                  TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                  + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                  armazenn4 + virgula + sep + armazenn5 + parenth + sep;
                }         

                    //------------------------------------------------------------------------    5
                    if (i == 179){ // +5
                      armazenConc = armazen2ArrayTudo.slice(175, i);// -4                   
                    }          
                    if (i == 184){ // +5
                      armazenDia = armazen2ArrayTudo.slice(182, i); // -2    
                                
                    }      
                    if (i == 187){ // +3
                      armazenMes = armazen2ArrayTudo.slice(185, i); // -2    
                                
                    }       
                    if (i == 192){ //+5
                      armazenAno = armazen2ArrayTudo.slice(188, i); // -4    
                               
                    }      
                    if (i == 197){  // +5
                      armazenn1 = armazen2ArrayTudo.slice(195, i);     //-2
                               
                    }      
                    if (i == 200){ // +3
                      armazenn2 = armazen2ArrayTudo.slice(198, i);    //-2 
                               
                    }  
                    if (i == 203){ // +3
                      armazenn3 = armazen2ArrayTudo.slice(201, i);    //-2  
                              
                    }     
                    if (i == 206){ // +3
                      armazenn4 = armazen2ArrayTudo.slice(204, i);     //-2
                           
                    }    
                    if (i == 209){ // +3
                      armazenn5 = armazen2ArrayTudo.slice(207, i);     //-2
                      TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                      + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                      armazenn4 + virgula + sep + armazenn5 + parenth + sep;
                    }     
                    
          //------------------------------------------------------------------------    6
          if (i == 214){ // +5
             armazenConc = armazen2ArrayTudo.slice(210, i);// -4                   
             }          
          if (i == 219){ // +5
              armazenDia = armazen2ArrayTudo.slice(217, i); // -2    
             }      
          if (i == 222){ // +3
              armazenMes = armazen2ArrayTudo.slice(220, i); // -2    
             }       
          if (i == 227){ //+5
              armazenAno = armazen2ArrayTudo.slice(223, i); // -4    
             }      
          if (i == 232){  // +5
              armazenn1 = armazen2ArrayTudo.slice(230, i);     //-2
              }      
          if (i == 235){ // +3
              armazenn2 = armazen2ArrayTudo.slice(233, i);    //-2 
              }  
          if (i == 238){ // +3
              armazenn3 = armazen2ArrayTudo.slice(236, i);    //-2  
              }     
          if (i == 241){ // +3
              armazenn4 = armazen2ArrayTudo.slice(239, i);     //-2
              }    
          if (i == 244){ // +3
              armazenn5 = armazen2ArrayTudo.slice(242, i);     //-2
              TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
              + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
              armazenn4 + virgula + sep + armazenn5 + parenth + sep;
              }  
              
              
     //------------------------------------------------------------------------    7
     if (i == 249){ // +5
      armazenConc = armazen2ArrayTudo.slice(245, i);// -4                   
      }          
   if (i == 254){ // +5
       armazenDia = armazen2ArrayTudo.slice(252, i); // -2    
      }      
   if (i == 257){ // +3
       armazenMes = armazen2ArrayTudo.slice(255, i); // -2    
      }       
   if (i == 262){ //+5
       armazenAno = armazen2ArrayTudo.slice(258, i); // -4    
      }      
   if (i == 267){  // +5
       armazenn1 = armazen2ArrayTudo.slice(265, i);     //-2
       }      
   if (i == 270){ // +3
       armazenn2 = armazen2ArrayTudo.slice(268, i);    //-2 
       }  
   if (i == 273){ // +3
       armazenn3 = armazen2ArrayTudo.slice(271, i);    //-2  
       }     
   if (i == 276){ // +3
       armazenn4 = armazen2ArrayTudo.slice(274, i);     //-2
       }    
   if (i == 279){ // +3
       armazenn5 = armazen2ArrayTudo.slice(277, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }      


   //------------------------------------------------------------------------    8
   if (i == 284){ // +5
    armazenConc = armazen2ArrayTudo.slice(280, i);// -4                   
    }          
    if (i == 289){ // +5
        armazenDia = armazen2ArrayTudo.slice(287, i); // -2    
        }      
    if (i == 292){ // +3
        armazenMes = armazen2ArrayTudo.slice(290, i); // -2    
        }       
    if (i == 297){ //+5
        armazenAno = armazen2ArrayTudo.slice(293, i); // -4    
        }      
    if (i == 302){  // +5
        armazenn1 = armazen2ArrayTudo.slice(300, i);     //-2
        }      
    if (i == 305){ // +3
        armazenn2 = armazen2ArrayTudo.slice(303, i);    //-2 
        }  
    if (i == 308){ // +3
        armazenn3 = armazen2ArrayTudo.slice(306, i);    //-2  
        }     
    if (i == 311){ // +3
        armazenn4 = armazen2ArrayTudo.slice(309, i);     //-2
        }    
    if (i == 314){ // +3
        armazenn5 = armazen2ArrayTudo.slice(312, i);     //-2
        TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
        + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
        armazenn4 + virgula + sep + armazenn5 + parenth + sep;
        }      
     
    //------------------------------------------------------------------------    9
   if (i == 319){ // +5
    armazenConc = armazen2ArrayTudo.slice(315, i);// -4                   
    }          
    if (i == 324){ // +5
        armazenDia = armazen2ArrayTudo.slice(322, i); // -2    
        }      
    if (i == 327){ // +3
        armazenMes = armazen2ArrayTudo.slice(325, i); // -2    
        }       
    if (i == 332){ //+5
        armazenAno = armazen2ArrayTudo.slice(328, i); // -4    
        }      
    if (i == 337){  // +5
        armazenn1 = armazen2ArrayTudo.slice(335, i);     //-2
        }      
    if (i == 340){ // +3
        armazenn2 = armazen2ArrayTudo.slice(338, i);    //-2 
        }  
    if (i == 343){ // +3
        armazenn3 = armazen2ArrayTudo.slice(341, i);    //-2  
        }     
    if (i == 346){ // +3
        armazenn4 = armazen2ArrayTudo.slice(344, i);     //-2
        }    
    if (i == 349){ // +3
        armazenn5 = armazen2ArrayTudo.slice(347, i);     //-2
        TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
        + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
        armazenn4 + virgula + sep + armazenn5 + parenth + sep;
        }         
               
            
              

   //------------------------------------------------------------------------    10
   if (i == 354){ // +5
    armazenConc = armazen2ArrayTudo.slice(350, i);// -4                   
    }          
    if (i == 359){ // +5
        armazenDia = armazen2ArrayTudo.slice(357, i); // -2    
        }      
    if (i == 362){ // +3
        armazenMes = armazen2ArrayTudo.slice(360, i); // -2    
        }       
    if (i == 367){ //+5
        armazenAno = armazen2ArrayTudo.slice(363, i); // -4    
        }      
    if (i == 372){  // +5
        armazenn1 = armazen2ArrayTudo.slice(370, i);     //-2
        }      
    if (i == 375){ // +3
        armazenn2 = armazen2ArrayTudo.slice(373, i);    //-2 
        }  
    if (i == 378){ // +3
        armazenn3 = armazen2ArrayTudo.slice(376, i);    //-2  
        }     
    if (i == 381){ // +3
        armazenn4 = armazen2ArrayTudo.slice(379, i);     //-2
        }    
    if (i == 384){ // +3
        armazenn5 = armazen2ArrayTudo.slice(382, i);     //-2
        TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
        + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
        armazenn4 + virgula + sep + armazenn5 + parenth + sep;
        }         

   //------------------------------------------------------------------------    11
   if (i == 389){ // +5
    armazenConc = armazen2ArrayTudo.slice(385, i);// -4                   
    }          
    if (i == 394){ // +5
        armazenDia = armazen2ArrayTudo.slice(392, i); // -2    
        }      
    if (i == 397){ // +3
        armazenMes = armazen2ArrayTudo.slice(395, i); // -2    
        }       
    if (i == 402){ //+5
        armazenAno = armazen2ArrayTudo.slice(398, i); // -4    
        }      
    if (i == 407){  // +5
        armazenn1 = armazen2ArrayTudo.slice(405, i);     //-2
        }      
    if (i == 410){ // +3
        armazenn2 = armazen2ArrayTudo.slice(408, i);    //-2 
        }  
    if (i == 413){ // +3
        armazenn3 = armazen2ArrayTudo.slice(411, i);    //-2  
        }     
    if (i == 416){ // +3
        armazenn4 = armazen2ArrayTudo.slice(414, i);     //-2
        }    
    if (i == 419){ // +3
        armazenn5 = armazen2ArrayTudo.slice(417, i);     //-2
        TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
        + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
        armazenn4 + virgula + sep + armazenn5 + parenth + sep;
        }    

    //------------------------------------------------------------------------    12
   if (i == 424){ // +5
    armazenConc = armazen2ArrayTudo.slice(420, i);// -4                   
    }          
    if (i == 429){ // +5
        armazenDia = armazen2ArrayTudo.slice(427, i); // -2    
        }      
    if (i == 432){ // +3
        armazenMes = armazen2ArrayTudo.slice(430, i); // -2    
        }       
    if (i == 437){ //+5
        armazenAno = armazen2ArrayTudo.slice(433, i); // -4    
        }      
    if (i == 442){  // +5
        armazenn1 = armazen2ArrayTudo.slice(440, i);     //-2
        }      
    if (i == 445){ // +3
        armazenn2 = armazen2ArrayTudo.slice(443, i);    //-2 
        }  
    if (i == 448){ // +3
        armazenn3 = armazen2ArrayTudo.slice(446, i);    //-2  
        }     
    if (i == 451){ // +3
        armazenn4 = armazen2ArrayTudo.slice(449, i);     //-2
        }    
    if (i == 454){ // +3
        armazenn5 = armazen2ArrayTudo.slice(452, i);     //-2
        TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
        + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
        armazenn4 + virgula + sep + armazenn5 + parenth + sep;
        }        


      //------------------------------------------------------------------------    13
   if (i == 459){ // +5
    armazenConc = armazen2ArrayTudo.slice(455, i);// -4                   
    }          
    if (i == 464){ // +5
        armazenDia = armazen2ArrayTudo.slice(462, i); // -2    
        }      
    if (i == 467){ // +3
        armazenMes = armazen2ArrayTudo.slice(465, i); // -2    
        }       
    if (i == 472){ //+5
        armazenAno = armazen2ArrayTudo.slice(468, i); // -4    
        }      
    if (i == 477){  // +5
        armazenn1 = armazen2ArrayTudo.slice(475, i);     //-2
        }      
    if (i == 480){ // +3
        armazenn2 = armazen2ArrayTudo.slice(478, i);    //-2 
        }  
    if (i == 483){ // +3
        armazenn3 = armazen2ArrayTudo.slice(481, i);    //-2  
        }     
    if (i == 486){ // +3
        armazenn4 = armazen2ArrayTudo.slice(484, i);     //-2
        }    
    if (i == 489){ // +3
        armazenn5 = armazen2ArrayTudo.slice(487, i);     //-2
        TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
        + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
        armazenn4 + virgula + sep + armazenn5 + parenth + sep;
        }    


        //------------------------------------------------------------------------    14
        if (i == 494){ // +5
          armazenConc = armazen2ArrayTudo.slice(490, i);// -4                   
          }          
          if (i == 499){ // +5
              armazenDia = armazen2ArrayTudo.slice(497, i); // -2    
              }      
          if (i == 502){ // +3
              armazenMes = armazen2ArrayTudo.slice(500, i); // -2    
              }       
          if (i == 507){ //+5
              armazenAno = armazen2ArrayTudo.slice(503, i); // -4    
              }      
          if (i == 512){  // +5
              armazenn1 = armazen2ArrayTudo.slice(510, i);     //-2
              }      
          if (i == 515){ // +3
              armazenn2 = armazen2ArrayTudo.slice(513, i);    //-2 
              }  
          if (i == 518){ // +3
              armazenn3 = armazen2ArrayTudo.slice(516, i);    //-2  
              }     
          if (i == 521){ // +3
              armazenn4 = armazen2ArrayTudo.slice(519, i);     //-2
              }    
          if (i == 524){ // +3
              armazenn5 = armazen2ArrayTudo.slice(522, i);     //-2
              TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
              + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
              armazenn4 + virgula + sep + armazenn5 + parenth + sep;
              }      
              
       //------------------------------------------------------------------------    15
       if (i == 529){ // +5
        armazenConc = armazen2ArrayTudo.slice(525, i);// -4                   
        }          
        if (i == 534){ // +5
            armazenDia = armazen2ArrayTudo.slice(532, i); // -2    
            }      
        if (i == 537){ // +3
            armazenMes = armazen2ArrayTudo.slice(535, i); // -2    
            }       
        if (i == 542){ //+5
            armazenAno = armazen2ArrayTudo.slice(538, i); // -4    
            }      
        if (i == 547){  // +5
            armazenn1 = armazen2ArrayTudo.slice(545, i);     //-2
            }      
        if (i == 550){ // +3
            armazenn2 = armazen2ArrayTudo.slice(548, i);    //-2 
            }  
        if (i == 553){ // +3
            armazenn3 = armazen2ArrayTudo.slice(551, i);    //-2  
            }     
        if (i == 556){ // +3
            armazenn4 = armazen2ArrayTudo.slice(554, i);     //-2
            }    
        if (i == 559){ // +3
            armazenn5 = armazen2ArrayTudo.slice(557, i);     //-2
            TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
            + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
            armazenn4 + virgula + sep + armazenn5 + parenth + sep;
            }          
        //------------------------------------------------------------------------    16
        if (i == 564){ // +5
          armazenConc = armazen2ArrayTudo.slice(560, i);// -4                   
          }          
          if (i == 569){ // +5
              armazenDia = armazen2ArrayTudo.slice(567, i); // -2    
              }      
          if (i == 572){ // +3
              armazenMes = armazen2ArrayTudo.slice(570, i); // -2    
              }       
          if (i == 577){ //+5
              armazenAno = armazen2ArrayTudo.slice(573, i); // -4    
              }      
          if (i == 582){  // +5
              armazenn1 = armazen2ArrayTudo.slice(580, i);     //-2
              }      
          if (i == 585){ // +3
              armazenn2 = armazen2ArrayTudo.slice(583, i);    //-2 
              }  
          if (i == 588){ // +3
              armazenn3 = armazen2ArrayTudo.slice(586, i);    //-2  
              }     
          if (i == 591){ // +3
              armazenn4 = armazen2ArrayTudo.slice(589, i);     //-2
              }    
          if (i == 594){ // +3
              armazenn5 = armazen2ArrayTudo.slice(592, i);     //-2
              TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
              + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
              armazenn4 + virgula + sep + armazenn5 + parenth + sep;
              }    
               //------------------------------------------------------------------------    17
        if (i == 599){ // +5
          armazenConc = armazen2ArrayTudo.slice(594, i);// -4                   
          }          
          if (i == 604){ // +5
              armazenDia = armazen2ArrayTudo.slice(602, i); // -2    
              }      
          if (i == 607){ // +3
              armazenMes = armazen2ArrayTudo.slice(605, i); // -2    
              }       
          if (i == 612){ //+5
              armazenAno = armazen2ArrayTudo.slice(608, i); // -4    
              }      
          if (i == 617){  // +5
              armazenn1 = armazen2ArrayTudo.slice(615, i);     //-2
              }      
          if (i == 620){ // +3
              armazenn2 = armazen2ArrayTudo.slice(618, i);    //-2 
              }  
          if (i == 623){ // +3
              armazenn3 = armazen2ArrayTudo.slice(621, i);    //-2  
              }     
          if (i == 626){ // +3
              armazenn4 = armazen2ArrayTudo.slice(624, i);     //-2
              }    
          if (i == 629){ // +3
              armazenn5 = armazen2ArrayTudo.slice(627, i);     //-2
              TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
              + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
              armazenn4 + virgula + sep + armazenn5 + parenth + sep;
              }    
       //------------------------------------------------------------------------    18
       if (i == 634){ // +5
        armazenConc = armazen2ArrayTudo.slice(630, i);// -4                   
        }          
        if (i == 639){ // +5
            armazenDia = armazen2ArrayTudo.slice(637, i); // -2    
            }      
        if (i == 642){ // +3
            armazenMes = armazen2ArrayTudo.slice(640, i); // -2    
            }       
        if (i == 647){ //+5
            armazenAno = armazen2ArrayTudo.slice(643, i); // -4    
            }      
        if (i == 652){  // +5
            armazenn1 = armazen2ArrayTudo.slice(650, i);     //-2
            }      
        if (i == 655){ // +3
            armazenn2 = armazen2ArrayTudo.slice(653, i);    //-2 
            }  
        if (i == 658){ // +3
            armazenn3 = armazen2ArrayTudo.slice(656, i);    //-2  
            }     
        if (i == 661){ // +3
            armazenn4 = armazen2ArrayTudo.slice(659, i);     //-2
            }    
        if (i == 664){ // +3
            armazenn5 = armazen2ArrayTudo.slice(662, i);     //-2
            TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
            + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
            armazenn4 + virgula + sep + armazenn5 + parenth + sep;
            }    
            
       //------------------------------------------------------------------------    19
       if (i == 669){ // +5
        armazenConc = armazen2ArrayTudo.slice(665, i);// -4                   
        }          
        if (i == 674){ // +5
            armazenDia = armazen2ArrayTudo.slice(672, i); // -2    
            }      
        if (i == 677){ // +3
            armazenMes = armazen2ArrayTudo.slice(675, i); // -2    
            }       
        if (i == 682){ //+5
            armazenAno = armazen2ArrayTudo.slice(678, i); // -4    
            }      
        if (i == 687){  // +5
            armazenn1 = armazen2ArrayTudo.slice(685, i);     //-2
            }      
        if (i == 690){ // +3
            armazenn2 = armazen2ArrayTudo.slice(688, i);    //-2 
            }  
        if (i == 693){ // +3
            armazenn3 = armazen2ArrayTudo.slice(691, i);    //-2  
            }     
        if (i == 696){ // +3
            armazenn4 = armazen2ArrayTudo.slice(694, i);     //-2
            }    
        if (i == 699){ // +3
            armazenn5 = armazen2ArrayTudo.slice(697, i);     //-2
            TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
            + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
            armazenn4 + virgula + sep + armazenn5 + parenth + sep;
            }    
    //------------------------------------------------------------------------    20
    if (i == 704){ // +5
      armazenConc = armazen2ArrayTudo.slice(700, i);// -4                   
      }          
      if (i == 709){ // +5
          armazenDia = armazen2ArrayTudo.slice(707, i); // -2    
          }      
      if (i == 712){ // +3
          armazenMes = armazen2ArrayTudo.slice(710, i); // -2    
          }       
      if (i == 717){ //+5
          armazenAno = armazen2ArrayTudo.slice(713, i); // -4    
          }      
      if (i == 822){  // +5
          armazenn1 = armazen2ArrayTudo.slice(820, i);     //-2
          }      
      if (i == 825){ // +3
          armazenn2 = armazen2ArrayTudo.slice(823, i);    //-2 
          }  
      if (i == 828){ // +3
          armazenn3 = armazen2ArrayTudo.slice(826, i);    //-2  
          }     
      if (i == 831){ // +3
          armazenn4 = armazen2ArrayTudo.slice(829, i);     //-2
          }    
      if (i == 834){ // +3
          armazenn5 = armazen2ArrayTudo.slice(832, i);     //-2
          TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
          + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
          armazenn4 + virgula + sep + armazenn5 + parenth + sep;
          }            
                   
      }                
          document.getElementById("quinatxt").innerHTML = TUDO;
}

/*------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
 

function insertsB(){
  armazen2ArrayTudo = [];
  TUDO = "";
  armazen2 = "";
  quinaone = "insert into quina (concurso, dia, mes, ano, n1, n2, n3, n4, n5) values ("
  armazen1 = quinaone;
//   console.log(armazen1);
  armazen2 = quinaTextAreaC.value;
//   console.log(armazen2);
  slicingB();
}

function slicingB(){
   armazen2ArrayTudo = armazen2;
   console.log("longueur is " + armazen2.length);
  
       for(i = 0; i <= armazen2.length; i++){       
           if (i == 4){
             armazenConc = armazen2ArrayTudo.slice(0, i);                   
           }
          
           if (i == 9){
               armazenDia = armazen2ArrayTudo.slice(7, i);    
               console.log("armazenDia = " + armazenDia);   
             }      
          if (i == 12){
             armazenMes = armazen2ArrayTudo.slice(10, i);
             console.log("armazenMes = " + armazenMes);
             }
           if (i == 17){
             armazenAno = armazen2ArrayTudo.slice(13, i);    
             console.log("armazenAno = " + armazenAno);   
             }          

             if (i == 22){
               armazenn1 = armazen2ArrayTudo.slice(20, i);
               console.log("armazenn1 = " + armazenn1);
             }
             if (i == 25){
                 armazenn2 = armazen2ArrayTudo.slice(23, i);    
                 console.log("armazenn2 = " + armazenn2);   
             }      
             if (i == 28){
               armazenn3 = armazen2ArrayTudo.slice(26, i);
                console.log("armazenn3 = " + armazenn3);
             }
             if (i == 31){
               armazenn4 = armazen2ArrayTudo.slice(29, i);    
               console.log("armazenn4 = " + armazenn4);   
             }       
             if (i == 34){
               armazenn5 = armazen2ArrayTudo.slice(32, i);    
               console.log("armazenn5 = " + armazenn5);  
               TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
               + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
               armazenn4 + virgula + sep + armazenn5 + parenth + sep;
               //console.log("TUDO is " + TUDO);   
             }      
             //------------------------------------------------------------------------    1
             if (i == 39){ // +5
               armazenConc = armazen2ArrayTudo.slice(35, i);// -4                   
             }          
             if (i == 44){ // +5
               armazenDia = armazen2ArrayTudo.slice(42, i);     
                         
             }      
             if (i == 47){ // +3
               armazenMes = armazen2ArrayTudo.slice(45, i); // -2    
                         
             }       
             if (i == 52){ //+5
               armazenAno = armazen2ArrayTudo.slice(48, i); // -4    
                        
             }      
             if (i == 57){  // +5
               armazenn1 = armazen2ArrayTudo.slice(55, i);     //-2
                        
             }      
             if (i == 60){ // +3
               armazenn2 = armazen2ArrayTudo.slice(58, i);    //-2 
                        
             }  
             if (i == 63){ // +3
               armazenn3 = armazen2ArrayTudo.slice(61, i);    //-2  
                       
             }     
             if (i == 66){ // +3
               armazenn4 = armazen2ArrayTudo.slice(64, i);     //-2
                    
             }    
             if (i == 69){ // +3
               armazenn5 = armazen2ArrayTudo.slice(67, i);     //-2
               TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
               + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
               armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }         

             //------------------------------------------------------------------------    2
             if (i == 74){ // +5
               armazenConc = armazen2ArrayTudo.slice(70, i);// -4                   
             }          
             if (i == 79){ // +5
               armazenDia = armazen2ArrayTudo.slice(77, i); // -2    
                         
             }      
             if (i == 82){ // +3
               armazenMes = armazen2ArrayTudo.slice(80, i); // -2    
                         
             }       
             if (i == 87){ //+5
               armazenAno = armazen2ArrayTudo.slice(83, i); // -4    
                        
             }      
             if (i == 92){  // +5
               armazenn1 = armazen2ArrayTudo.slice(90, i);     //-2
                        
             }      
             if (i == 95){ // +3
               armazenn2 = armazen2ArrayTudo.slice(93, i);    //-2 
                        
             }  
             if (i == 98){ // +3
               armazenn3 = armazen2ArrayTudo.slice(96, i);    //-2  
                       
             }     
             if (i == 101){ // +3
               armazenn4 = armazen2ArrayTudo.slice(99, i);     //-2
                    
             }    
             if (i == 104){ // +3
               armazenn5 = armazen2ArrayTudo.slice(102, i);     //-2
               TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
               + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
               armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }   
             
                //------------------------------------------------------------------------    3
             if (i == 109){ // +5
               armazenConc = armazen2ArrayTudo.slice(105, i);// -4                   
             }          
             if (i == 114){ // +5
               armazenDia = armazen2ArrayTudo.slice(112, i); // -2    
                         
             }      
             if (i == 117){ // +3
               armazenMes = armazen2ArrayTudo.slice(115, i); // -2    
                         
             }       
             if (i == 122){ //+5
               armazenAno = armazen2ArrayTudo.slice(118, i); // -4    
                        
             }      
             if (i == 127){  // +5
               armazenn1 = armazen2ArrayTudo.slice(125, i);     //-2
                        
             }      
             if (i == 130){ // +3
               armazenn2 = armazen2ArrayTudo.slice(128, i);    //-2 
                        
             }  
             if (i == 133){ // +3
               armazenn3 = armazen2ArrayTudo.slice(131, i);    //-2  
                       
             }     
             if (i == 136){ // +3
               armazenn4 = armazen2ArrayTudo.slice(134, i);     //-2
                    
             }    
             if (i == 139){ // +3
               armazenn5 = armazen2ArrayTudo.slice(137, i);     //-2
               TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
               + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
               armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }         

                 
                //------------------------------------------------------------------------    4
                if (i == 144){ // +5
                 armazenConc = armazen2ArrayTudo.slice(140, i);// -4                   
               }          
               if (i == 149){ // +5
                 armazenDia = armazen2ArrayTudo.slice(147, i); // -2    
                           
               }      
               if (i == 152){ // +3
                 armazenMes = armazen2ArrayTudo.slice(150, i); // -2    
                           
               }       
               if (i == 157){ //+5
                 armazenAno = armazen2ArrayTudo.slice(153, i); // -4    
                          
               }      
               if (i == 162){  // +5
                 armazenn1 = armazen2ArrayTudo.slice(160, i);     //-2
                          
               }      
               if (i == 165){ // +3
                 armazenn2 = armazen2ArrayTudo.slice(163, i);    //-2 
                          
               }  
               if (i == 168){ // +3
                 armazenn3 = armazen2ArrayTudo.slice(166, i);    //-2  
                         
               }     
               if (i == 171){ // +3
                 armazenn4 = armazen2ArrayTudo.slice(169, i);     //-2
                      
               }    
               if (i == 174){ // +3
                 armazenn5 = armazen2ArrayTudo.slice(172, i);     //-2
                 TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                 + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                 armazenn4 + virgula + sep + armazenn5 + parenth + sep;
               }         

                   //------------------------------------------------------------------------    5
                   if (i == 179){ // +5
                     armazenConc = armazen2ArrayTudo.slice(175, i);// -4                   
                   }          
                   if (i == 184){ // +5
                     armazenDia = armazen2ArrayTudo.slice(182, i); // -2    
                               
                   }      
                   if (i == 187){ // +3
                     armazenMes = armazen2ArrayTudo.slice(185, i); // -2    
                               
                   }       
                   if (i == 192){ //+5
                     armazenAno = armazen2ArrayTudo.slice(188, i); // -4    
                              
                   }      
                   if (i == 197){  // +5
                     armazenn1 = armazen2ArrayTudo.slice(195, i);     //-2
                              
                   }      
                   if (i == 200){ // +3
                     armazenn2 = armazen2ArrayTudo.slice(198, i);    //-2 
                              
                   }  
                   if (i == 203){ // +3
                     armazenn3 = armazen2ArrayTudo.slice(201, i);    //-2  
                             
                   }     
                   if (i == 206){ // +3
                     armazenn4 = armazen2ArrayTudo.slice(204, i);     //-2
                          
                   }    
                   if (i == 209){ // +3
                     armazenn5 = armazen2ArrayTudo.slice(207, i);     //-2
                     TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                     + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                     armazenn4 + virgula + sep + armazenn5 + parenth + sep;
                   }     
                   
         //------------------------------------------------------------------------    6
         if (i == 214){ // +5
            armazenConc = armazen2ArrayTudo.slice(210, i);// -4                   
            }          
         if (i == 219){ // +5
             armazenDia = armazen2ArrayTudo.slice(217, i); // -2    
            }      
         if (i == 222){ // +3
             armazenMes = armazen2ArrayTudo.slice(220, i); // -2    
            }       
         if (i == 227){ //+5
             armazenAno = armazen2ArrayTudo.slice(223, i); // -4    
            }      
         if (i == 232){  // +5
             armazenn1 = armazen2ArrayTudo.slice(230, i);     //-2
             }      
         if (i == 235){ // +3
             armazenn2 = armazen2ArrayTudo.slice(233, i);    //-2 
             }  
         if (i == 238){ // +3
             armazenn3 = armazen2ArrayTudo.slice(236, i);    //-2  
             }     
         if (i == 241){ // +3
             armazenn4 = armazen2ArrayTudo.slice(239, i);     //-2
             }    
         if (i == 244){ // +3
             armazenn5 = armazen2ArrayTudo.slice(242, i);     //-2
             TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
             + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
             armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }  
             
             
    //------------------------------------------------------------------------    7
    if (i == 249){ // +5
     armazenConc = armazen2ArrayTudo.slice(245, i);// -4                   
     }          
  if (i == 254){ // +5
      armazenDia = armazen2ArrayTudo.slice(252, i); // -2    
     }      
  if (i == 257){ // +3
      armazenMes = armazen2ArrayTudo.slice(255, i); // -2    
     }       
  if (i == 262){ //+5
      armazenAno = armazen2ArrayTudo.slice(258, i); // -4    
     }      
  if (i == 267){  // +5
      armazenn1 = armazen2ArrayTudo.slice(265, i);     //-2
      }      
  if (i == 270){ // +3
      armazenn2 = armazen2ArrayTudo.slice(268, i);    //-2 
      }  
  if (i == 273){ // +3
      armazenn3 = armazen2ArrayTudo.slice(271, i);    //-2  
      }     
  if (i == 276){ // +3
      armazenn4 = armazen2ArrayTudo.slice(274, i);     //-2
      }    
  if (i == 279){ // +3
      armazenn5 = armazen2ArrayTudo.slice(277, i);     //-2
      TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
      + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
      armazenn4 + virgula + sep + armazenn5 + parenth + sep;
      }      


  //------------------------------------------------------------------------    8
  if (i == 284){ // +5
   armazenConc = armazen2ArrayTudo.slice(280, i);// -4                   
   }          
   if (i == 289){ // +5
       armazenDia = armazen2ArrayTudo.slice(287, i); // -2    
       }      
   if (i == 292){ // +3
       armazenMes = armazen2ArrayTudo.slice(290, i); // -2    
       }       
   if (i == 297){ //+5
       armazenAno = armazen2ArrayTudo.slice(293, i); // -4    
       }      
   if (i == 302){  // +5
       armazenn1 = armazen2ArrayTudo.slice(300, i);     //-2
       }      
   if (i == 305){ // +3
       armazenn2 = armazen2ArrayTudo.slice(303, i);    //-2 
       }  
   if (i == 308){ // +3
       armazenn3 = armazen2ArrayTudo.slice(306, i);    //-2  
       }     
   if (i == 311){ // +3
       armazenn4 = armazen2ArrayTudo.slice(309, i);     //-2
       }    
   if (i == 314){ // +3
       armazenn5 = armazen2ArrayTudo.slice(312, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }      
    
   //------------------------------------------------------------------------    9
  if (i == 319){ // +5
   armazenConc = armazen2ArrayTudo.slice(315, i);// -4                   
   }          
   if (i == 324){ // +5
       armazenDia = armazen2ArrayTudo.slice(322, i); // -2    
       }      
   if (i == 327){ // +3
       armazenMes = armazen2ArrayTudo.slice(325, i); // -2    
       }       
   if (i == 332){ //+5
       armazenAno = armazen2ArrayTudo.slice(328, i); // -4    
       }      
   if (i == 337){  // +5
       armazenn1 = armazen2ArrayTudo.slice(335, i);     //-2
       }      
   if (i == 340){ // +3
       armazenn2 = armazen2ArrayTudo.slice(338, i);    //-2 
       }  
   if (i == 343){ // +3
       armazenn3 = armazen2ArrayTudo.slice(341, i);    //-2  
       }     
   if (i == 346){ // +3
       armazenn4 = armazen2ArrayTudo.slice(344, i);     //-2
       }    
   if (i == 349){ // +3
       armazenn5 = armazen2ArrayTudo.slice(347, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }         
              
           
             

  //------------------------------------------------------------------------    10
  if (i == 354){ // +5
   armazenConc = armazen2ArrayTudo.slice(350, i);// -4                   
   }          
   if (i == 359){ // +5
       armazenDia = armazen2ArrayTudo.slice(357, i); // -2    
       }      
   if (i == 362){ // +3
       armazenMes = armazen2ArrayTudo.slice(360, i); // -2    
       }       
   if (i == 367){ //+5
       armazenAno = armazen2ArrayTudo.slice(363, i); // -4    
       }      
   if (i == 372){  // +5
       armazenn1 = armazen2ArrayTudo.slice(370, i);     //-2
       }      
   if (i == 375){ // +3
       armazenn2 = armazen2ArrayTudo.slice(373, i);    //-2 
       }  
   if (i == 378){ // +3
       armazenn3 = armazen2ArrayTudo.slice(376, i);    //-2  
       }     
   if (i == 381){ // +3
       armazenn4 = armazen2ArrayTudo.slice(379, i);     //-2
       }    
   if (i == 384){ // +3
       armazenn5 = armazen2ArrayTudo.slice(382, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }         

  //------------------------------------------------------------------------    11
  if (i == 389){ // +5
   armazenConc = armazen2ArrayTudo.slice(385, i);// -4                   
   }          
   if (i == 394){ // +5
       armazenDia = armazen2ArrayTudo.slice(392, i); // -2    
       }      
   if (i == 397){ // +3
       armazenMes = armazen2ArrayTudo.slice(395, i); // -2    
       }       
   if (i == 402){ //+5
       armazenAno = armazen2ArrayTudo.slice(398, i); // -4    
       }      
   if (i == 407){  // +5
       armazenn1 = armazen2ArrayTudo.slice(405, i);     //-2
       }      
   if (i == 410){ // +3
       armazenn2 = armazen2ArrayTudo.slice(408, i);    //-2 
       }  
   if (i == 413){ // +3
       armazenn3 = armazen2ArrayTudo.slice(411, i);    //-2  
       }     
   if (i == 416){ // +3
       armazenn4 = armazen2ArrayTudo.slice(414, i);     //-2
       }    
   if (i == 419){ // +3
       armazenn5 = armazen2ArrayTudo.slice(417, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }    

   //------------------------------------------------------------------------    12
  if (i == 424){ // +5
   armazenConc = armazen2ArrayTudo.slice(420, i);// -4                   
   }          
   if (i == 429){ // +5
       armazenDia = armazen2ArrayTudo.slice(427, i); // -2    
       }      
   if (i == 432){ // +3
       armazenMes = armazen2ArrayTudo.slice(430, i); // -2    
       }       
   if (i == 437){ //+5
       armazenAno = armazen2ArrayTudo.slice(433, i); // -4    
       }      
   if (i == 442){  // +5
       armazenn1 = armazen2ArrayTudo.slice(440, i);     //-2
       }      
   if (i == 445){ // +3
       armazenn2 = armazen2ArrayTudo.slice(443, i);    //-2 
       }  
   if (i == 448){ // +3
       armazenn3 = armazen2ArrayTudo.slice(446, i);    //-2  
       }     
   if (i == 451){ // +3
       armazenn4 = armazen2ArrayTudo.slice(449, i);     //-2
       }    
   if (i == 454){ // +3
       armazenn5 = armazen2ArrayTudo.slice(452, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }        


     //------------------------------------------------------------------------    13
  if (i == 459){ // +5
   armazenConc = armazen2ArrayTudo.slice(455, i);// -4                   
   }          
   if (i == 464){ // +5
       armazenDia = armazen2ArrayTudo.slice(462, i); // -2    
       }      
   if (i == 467){ // +3
       armazenMes = armazen2ArrayTudo.slice(465, i); // -2    
       }       
   if (i == 472){ //+5
       armazenAno = armazen2ArrayTudo.slice(468, i); // -4    
       }      
   if (i == 477){  // +5
       armazenn1 = armazen2ArrayTudo.slice(475, i);     //-2
       }      
   if (i == 480){ // +3
       armazenn2 = armazen2ArrayTudo.slice(478, i);    //-2 
       }  
   if (i == 483){ // +3
       armazenn3 = armazen2ArrayTudo.slice(481, i);    //-2  
       }     
   if (i == 486){ // +3
       armazenn4 = armazen2ArrayTudo.slice(484, i);     //-2
       }    
   if (i == 489){ // +3
       armazenn5 = armazen2ArrayTudo.slice(487, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }    


       //------------------------------------------------------------------------    14
       if (i == 494){ // +5
         armazenConc = armazen2ArrayTudo.slice(490, i);// -4                   
         }          
         if (i == 499){ // +5
             armazenDia = armazen2ArrayTudo.slice(497, i); // -2    
             }      
         if (i == 502){ // +3
             armazenMes = armazen2ArrayTudo.slice(500, i); // -2    
             }       
         if (i == 507){ //+5
             armazenAno = armazen2ArrayTudo.slice(503, i); // -4    
             }      
         if (i == 512){  // +5
             armazenn1 = armazen2ArrayTudo.slice(510, i);     //-2
             }      
         if (i == 515){ // +3
             armazenn2 = armazen2ArrayTudo.slice(513, i);    //-2 
             }  
         if (i == 518){ // +3
             armazenn3 = armazen2ArrayTudo.slice(516, i);    //-2  
             }     
         if (i == 521){ // +3
             armazenn4 = armazen2ArrayTudo.slice(519, i);     //-2
             }    
         if (i == 524){ // +3
             armazenn5 = armazen2ArrayTudo.slice(522, i);     //-2
             TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
             + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
             armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }      
             
      //------------------------------------------------------------------------    15
      if (i == 529){ // +5
       armazenConc = armazen2ArrayTudo.slice(525, i);// -4                   
       }          
       if (i == 534){ // +5
           armazenDia = armazen2ArrayTudo.slice(532, i); // -2    
           }      
       if (i == 537){ // +3
           armazenMes = armazen2ArrayTudo.slice(535, i); // -2    
           }       
       if (i == 542){ //+5
           armazenAno = armazen2ArrayTudo.slice(538, i); // -4    
           }      
       if (i == 547){  // +5
           armazenn1 = armazen2ArrayTudo.slice(545, i);     //-2
           }      
       if (i == 550){ // +3
           armazenn2 = armazen2ArrayTudo.slice(548, i);    //-2 
           }  
       if (i == 553){ // +3
           armazenn3 = armazen2ArrayTudo.slice(551, i);    //-2  
           }     
       if (i == 556){ // +3
           armazenn4 = armazen2ArrayTudo.slice(554, i);     //-2
           }    
       if (i == 559){ // +3
           armazenn5 = armazen2ArrayTudo.slice(557, i);     //-2
           TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
           + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
           armazenn4 + virgula + sep + armazenn5 + parenth + sep;
           }    
        //------------------------------------------------------------------------    16
        if (i == 564){ // +5
          armazenConc = armazen2ArrayTudo.slice(560, i);// -4                   
          }          
          if (i == 569){ // +5
              armazenDia = armazen2ArrayTudo.slice(567, i); // -2    
              }      
          if (i == 572){ // +3
              armazenMes = armazen2ArrayTudo.slice(570, i); // -2    
              }       
          if (i == 577){ //+5
              armazenAno = armazen2ArrayTudo.slice(573, i); // -4    
              }      
          if (i == 582){  // +5
              armazenn1 = armazen2ArrayTudo.slice(580, i);     //-2
              }      
          if (i == 585){ // +3
              armazenn2 = armazen2ArrayTudo.slice(583, i);    //-2 
              }  
          if (i == 588){ // +3
              armazenn3 = armazen2ArrayTudo.slice(586, i);    //-2  
              }     
          if (i == 591){ // +3
              armazenn4 = armazen2ArrayTudo.slice(589, i);     //-2
              }    
          if (i == 594){ // +3
              armazenn5 = armazen2ArrayTudo.slice(592, i);     //-2
              TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
              + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
              armazenn4 + virgula + sep + armazenn5 + parenth + sep;
              }    
               //------------------------------------------------------------------------    17
        if (i == 599){ // +5
          armazenConc = armazen2ArrayTudo.slice(594, i);// -4                   
          }          
          if (i == 604){ // +5
              armazenDia = armazen2ArrayTudo.slice(602, i); // -2    
              }      
          if (i == 607){ // +3
              armazenMes = armazen2ArrayTudo.slice(605, i); // -2    
              }       
          if (i == 612){ //+5
              armazenAno = armazen2ArrayTudo.slice(608, i); // -4    
              }      
          if (i == 617){  // +5
              armazenn1 = armazen2ArrayTudo.slice(615, i);     //-2
              }      
          if (i == 620){ // +3
              armazenn2 = armazen2ArrayTudo.slice(618, i);    //-2 
              }  
          if (i == 623){ // +3
              armazenn3 = armazen2ArrayTudo.slice(621, i);    //-2  
              }     
          if (i == 626){ // +3
              armazenn4 = armazen2ArrayTudo.slice(624, i);     //-2
              }    
          if (i == 629){ // +3
              armazenn5 = armazen2ArrayTudo.slice(627, i);     //-2
              TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
              + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
              armazenn4 + virgula + sep + armazenn5 + parenth + sep;
              }    
       //------------------------------------------------------------------------    18
       if (i == 634){ // +5
        armazenConc = armazen2ArrayTudo.slice(630, i);// -4                   
        }          
        if (i == 639){ // +5
            armazenDia = armazen2ArrayTudo.slice(637, i); // -2    
            }      
        if (i == 642){ // +3
            armazenMes = armazen2ArrayTudo.slice(640, i); // -2    
            }       
        if (i == 647){ //+5
            armazenAno = armazen2ArrayTudo.slice(643, i); // -4    
            }      
        if (i == 652){  // +5
            armazenn1 = armazen2ArrayTudo.slice(650, i);     //-2
            }      
        if (i == 655){ // +3
            armazenn2 = armazen2ArrayTudo.slice(653, i);    //-2 
            }  
        if (i == 658){ // +3
            armazenn3 = armazen2ArrayTudo.slice(656, i);    //-2  
            }     
        if (i == 661){ // +3
            armazenn4 = armazen2ArrayTudo.slice(659, i);     //-2
            }    
        if (i == 664){ // +3
            armazenn5 = armazen2ArrayTudo.slice(662, i);     //-2
            TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
            + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
            armazenn4 + virgula + sep + armazenn5 + parenth + sep;
            }    
            
       //------------------------------------------------------------------------    19
       if (i == 669){ // +5
        armazenConc = armazen2ArrayTudo.slice(665, i);// -4                   
        }          
        if (i == 674){ // +5
            armazenDia = armazen2ArrayTudo.slice(672, i); // -2    
            }      
        if (i == 677){ // +3
            armazenMes = armazen2ArrayTudo.slice(675, i); // -2    
            }       
        if (i == 682){ //+5
            armazenAno = armazen2ArrayTudo.slice(678, i); // -4    
            }      
        if (i == 687){  // +5
            armazenn1 = armazen2ArrayTudo.slice(685, i);     //-2
            }      
        if (i == 690){ // +3
            armazenn2 = armazen2ArrayTudo.slice(688, i);    //-2 
            }  
        if (i == 693){ // +3
            armazenn3 = armazen2ArrayTudo.slice(691, i);    //-2  
            }     
        if (i == 696){ // +3
            armazenn4 = armazen2ArrayTudo.slice(694, i);     //-2
            }    
        if (i == 699){ // +3
            armazenn5 = armazen2ArrayTudo.slice(697, i);     //-2
            TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
            + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
            armazenn4 + virgula + sep + armazenn5 + parenth + sep;
            }    
    //------------------------------------------------------------------------    20
    if (i == 704){ // +5
      armazenConc = armazen2ArrayTudo.slice(700, i);// -4                   
      }          
      if (i == 709){ // +5
          armazenDia = armazen2ArrayTudo.slice(707, i); // -2    
          }      
      if (i == 712){ // +3
          armazenMes = armazen2ArrayTudo.slice(710, i); // -2    
          }       
      if (i == 717){ //+5
          armazenAno = armazen2ArrayTudo.slice(713, i); // -4    
          }      
      if (i == 822){  // +5
          armazenn1 = armazen2ArrayTudo.slice(820, i);     //-2
          }      
      if (i == 825){ // +3
          armazenn2 = armazen2ArrayTudo.slice(823, i);    //-2 
          }  
      if (i == 828){ // +3
          armazenn3 = armazen2ArrayTudo.slice(826, i);    //-2  
          }     
      if (i == 831){ // +3
          armazenn4 = armazen2ArrayTudo.slice(829, i);     //-2
          }    
      if (i == 834){ // +3
          armazenn5 = armazen2ArrayTudo.slice(832, i);     //-2
          TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
          + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
          armazenn4 + virgula + sep + armazenn5 + parenth + sep;
          }            
                
    }            
             
        document.getElementById("quinatxtB").innerHTML = TUDO;
}


/*------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
 

function insertsC(){
  armazen2ArrayTudo = [];
  TUDO = "";
  armazen2 = "";
  quinaone = "insert into quina (concurso, dia, mes, ano, n1, n2, n3, n4, n5) values ("
  armazen1 = quinaone;
//   console.log(armazen1);
  armazen2 = quinaTextAreaB.value;
//   console.log(armazen2);
  slicingC();
}

function slicingC(){
   armazen2ArrayTudo = armazen2;
   console.log("longueur is " + armazen2.length);
  
       for(i = 0; i <= armazen2.length; i++){       
           if (i == 4){
             armazenConc = armazen2ArrayTudo.slice(0, i);                   
           }
          
           if (i == 9){
               armazenDia = armazen2ArrayTudo.slice(7, i);    
               console.log("armazenDia = " + armazenDia);   
             }      
          if (i == 12){
             armazenMes = armazen2ArrayTudo.slice(10, i);
             console.log("armazenMes = " + armazenMes);
             }
           if (i == 17){
             armazenAno = armazen2ArrayTudo.slice(13, i);    
             console.log("armazenAno = " + armazenAno);   
             }          

             if (i == 22){
               armazenn1 = armazen2ArrayTudo.slice(20, i);
               console.log("armazenn1 = " + armazenn1);
             }
             if (i == 25){
                 armazenn2 = armazen2ArrayTudo.slice(23, i);    
                 console.log("armazenn2 = " + armazenn2);   
             }      
             if (i == 28){
               armazenn3 = armazen2ArrayTudo.slice(26, i);
                console.log("armazenn3 = " + armazenn3);
             }
             if (i == 31){
               armazenn4 = armazen2ArrayTudo.slice(29, i);    
               console.log("armazenn4 = " + armazenn4);   
             }       
             if (i == 34){
               armazenn5 = armazen2ArrayTudo.slice(32, i);    
               console.log("armazenn5 = " + armazenn5);  
               TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
               + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
               armazenn4 + virgula + sep + armazenn5 + parenth + sep;
               //console.log("TUDO is " + TUDO);   
             }      
             //------------------------------------------------------------------------    1
             if (i == 39){ // +5
               armazenConc = armazen2ArrayTudo.slice(35, i);// -4                   
             }          
             if (i == 44){ // +5
               armazenDia = armazen2ArrayTudo.slice(42, i);     
                         
             }      
             if (i == 47){ // +3
               armazenMes = armazen2ArrayTudo.slice(45, i); // -2    
                         
             }       
             if (i == 52){ //+5
               armazenAno = armazen2ArrayTudo.slice(48, i); // -4    
                        
             }      
             if (i == 57){  // +5
               armazenn1 = armazen2ArrayTudo.slice(55, i);     //-2
                        
             }      
             if (i == 60){ // +3
               armazenn2 = armazen2ArrayTudo.slice(58, i);    //-2 
                        
             }  
             if (i == 63){ // +3
               armazenn3 = armazen2ArrayTudo.slice(61, i);    //-2  
                       
             }     
             if (i == 66){ // +3
               armazenn4 = armazen2ArrayTudo.slice(64, i);     //-2
                    
             }    
             if (i == 69){ // +3
               armazenn5 = armazen2ArrayTudo.slice(67, i);     //-2
               TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
               + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
               armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }         

             //------------------------------------------------------------------------    2
             if (i == 74){ // +5
               armazenConc = armazen2ArrayTudo.slice(70, i);// -4                   
             }          
             if (i == 79){ // +5
               armazenDia = armazen2ArrayTudo.slice(77, i); // -2    
                         
             }      
             if (i == 82){ // +3
               armazenMes = armazen2ArrayTudo.slice(80, i); // -2    
                         
             }       
             if (i == 87){ //+5
               armazenAno = armazen2ArrayTudo.slice(83, i); // -4    
                        
             }      
             if (i == 92){  // +5
               armazenn1 = armazen2ArrayTudo.slice(90, i);     //-2
                        
             }      
             if (i == 95){ // +3
               armazenn2 = armazen2ArrayTudo.slice(93, i);    //-2 
                        
             }  
             if (i == 98){ // +3
               armazenn3 = armazen2ArrayTudo.slice(96, i);    //-2  
                       
             }     
             if (i == 101){ // +3
               armazenn4 = armazen2ArrayTudo.slice(99, i);     //-2
                    
             }    
             if (i == 104){ // +3
               armazenn5 = armazen2ArrayTudo.slice(102, i);     //-2
               TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
               + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
               armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }   
             
                //------------------------------------------------------------------------    3
             if (i == 109){ // +5
               armazenConc = armazen2ArrayTudo.slice(105, i);// -4                   
             }          
             if (i == 114){ // +5
               armazenDia = armazen2ArrayTudo.slice(112, i); // -2    
                         
             }      
             if (i == 117){ // +3
               armazenMes = armazen2ArrayTudo.slice(115, i); // -2    
                         
             }       
             if (i == 122){ //+5
               armazenAno = armazen2ArrayTudo.slice(118, i); // -4    
                        
             }      
             if (i == 127){  // +5
               armazenn1 = armazen2ArrayTudo.slice(125, i);     //-2
                        
             }      
             if (i == 130){ // +3
               armazenn2 = armazen2ArrayTudo.slice(128, i);    //-2 
                        
             }  
             if (i == 133){ // +3
               armazenn3 = armazen2ArrayTudo.slice(131, i);    //-2  
                       
             }     
             if (i == 136){ // +3
               armazenn4 = armazen2ArrayTudo.slice(134, i);     //-2
                    
             }    
             if (i == 139){ // +3
               armazenn5 = armazen2ArrayTudo.slice(137, i);     //-2
               TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
               + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
               armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }         

                 
                //------------------------------------------------------------------------    4
                if (i == 144){ // +5
                 armazenConc = armazen2ArrayTudo.slice(140, i);// -4                   
               }          
               if (i == 149){ // +5
                 armazenDia = armazen2ArrayTudo.slice(147, i); // -2    
                           
               }      
               if (i == 152){ // +3
                 armazenMes = armazen2ArrayTudo.slice(150, i); // -2    
                           
               }       
               if (i == 157){ //+5
                 armazenAno = armazen2ArrayTudo.slice(153, i); // -4    
                          
               }      
               if (i == 162){  // +5
                 armazenn1 = armazen2ArrayTudo.slice(160, i);     //-2
                          
               }      
               if (i == 165){ // +3
                 armazenn2 = armazen2ArrayTudo.slice(163, i);    //-2 
                          
               }  
               if (i == 168){ // +3
                 armazenn3 = armazen2ArrayTudo.slice(166, i);    //-2  
                         
               }     
               if (i == 171){ // +3
                 armazenn4 = armazen2ArrayTudo.slice(169, i);     //-2
                      
               }    
               if (i == 174){ // +3
                 armazenn5 = armazen2ArrayTudo.slice(172, i);     //-2
                 TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                 + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                 armazenn4 + virgula + sep + armazenn5 + parenth + sep;
               }         

                   //------------------------------------------------------------------------    5
                   if (i == 179){ // +5
                     armazenConc = armazen2ArrayTudo.slice(175, i);// -4                   
                   }          
                   if (i == 184){ // +5
                     armazenDia = armazen2ArrayTudo.slice(182, i); // -2    
                               
                   }      
                   if (i == 187){ // +3
                     armazenMes = armazen2ArrayTudo.slice(185, i); // -2    
                               
                   }       
                   if (i == 192){ //+5
                     armazenAno = armazen2ArrayTudo.slice(188, i); // -4    
                              
                   }      
                   if (i == 197){  // +5
                     armazenn1 = armazen2ArrayTudo.slice(195, i);     //-2
                              
                   }      
                   if (i == 200){ // +3
                     armazenn2 = armazen2ArrayTudo.slice(198, i);    //-2 
                              
                   }  
                   if (i == 203){ // +3
                     armazenn3 = armazen2ArrayTudo.slice(201, i);    //-2  
                             
                   }     
                   if (i == 206){ // +3
                     armazenn4 = armazen2ArrayTudo.slice(204, i);     //-2
                          
                   }    
                   if (i == 209){ // +3
                     armazenn5 = armazen2ArrayTudo.slice(207, i);     //-2
                     TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
                     + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
                     armazenn4 + virgula + sep + armazenn5 + parenth + sep;
                   }     
                   
         //------------------------------------------------------------------------    6
         if (i == 214){ // +5
            armazenConc = armazen2ArrayTudo.slice(210, i);// -4                   
            }          
         if (i == 219){ // +5
             armazenDia = armazen2ArrayTudo.slice(217, i); // -2    
            }      
         if (i == 222){ // +3
             armazenMes = armazen2ArrayTudo.slice(220, i); // -2    
            }       
         if (i == 227){ //+5
             armazenAno = armazen2ArrayTudo.slice(223, i); // -4    
            }      
         if (i == 232){  // +5
             armazenn1 = armazen2ArrayTudo.slice(230, i);     //-2
             }      
         if (i == 235){ // +3
             armazenn2 = armazen2ArrayTudo.slice(233, i);    //-2 
             }  
         if (i == 238){ // +3
             armazenn3 = armazen2ArrayTudo.slice(236, i);    //-2  
             }     
         if (i == 241){ // +3
             armazenn4 = armazen2ArrayTudo.slice(239, i);     //-2
             }    
         if (i == 244){ // +3
             armazenn5 = armazen2ArrayTudo.slice(242, i);     //-2
             TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
             + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
             armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }  
             
             
    //------------------------------------------------------------------------    7
    if (i == 249){ // +5
     armazenConc = armazen2ArrayTudo.slice(245, i);// -4                   
     }          
  if (i == 254){ // +5
      armazenDia = armazen2ArrayTudo.slice(252, i); // -2    
     }      
  if (i == 257){ // +3
      armazenMes = armazen2ArrayTudo.slice(255, i); // -2    
     }       
  if (i == 262){ //+5
      armazenAno = armazen2ArrayTudo.slice(258, i); // -4    
     }      
  if (i == 267){  // +5
      armazenn1 = armazen2ArrayTudo.slice(265, i);     //-2
      }      
  if (i == 270){ // +3
      armazenn2 = armazen2ArrayTudo.slice(268, i);    //-2 
      }  
  if (i == 273){ // +3
      armazenn3 = armazen2ArrayTudo.slice(271, i);    //-2  
      }     
  if (i == 276){ // +3
      armazenn4 = armazen2ArrayTudo.slice(274, i);     //-2
      }    
  if (i == 279){ // +3
      armazenn5 = armazen2ArrayTudo.slice(277, i);     //-2
      TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
      + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
      armazenn4 + virgula + sep + armazenn5 + parenth + sep;
      }      


  //------------------------------------------------------------------------    8
  if (i == 284){ // +5
   armazenConc = armazen2ArrayTudo.slice(280, i);// -4                   
   }          
   if (i == 289){ // +5
       armazenDia = armazen2ArrayTudo.slice(287, i); // -2    
       }      
   if (i == 292){ // +3
       armazenMes = armazen2ArrayTudo.slice(290, i); // -2    
       }       
   if (i == 297){ //+5
       armazenAno = armazen2ArrayTudo.slice(293, i); // -4    
       }      
   if (i == 302){  // +5
       armazenn1 = armazen2ArrayTudo.slice(300, i);     //-2
       }      
   if (i == 305){ // +3
       armazenn2 = armazen2ArrayTudo.slice(303, i);    //-2 
       }  
   if (i == 308){ // +3
       armazenn3 = armazen2ArrayTudo.slice(306, i);    //-2  
       }     
   if (i == 311){ // +3
       armazenn4 = armazen2ArrayTudo.slice(309, i);     //-2
       }    
   if (i == 314){ // +3
       armazenn5 = armazen2ArrayTudo.slice(312, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }      
    
   //------------------------------------------------------------------------    9
  if (i == 319){ // +5
   armazenConc = armazen2ArrayTudo.slice(315, i);// -4                   
   }          
   if (i == 324){ // +5
       armazenDia = armazen2ArrayTudo.slice(322, i); // -2    
       }      
   if (i == 327){ // +3
       armazenMes = armazen2ArrayTudo.slice(325, i); // -2    
       }       
   if (i == 332){ //+5
       armazenAno = armazen2ArrayTudo.slice(328, i); // -4    
       }      
   if (i == 337){  // +5
       armazenn1 = armazen2ArrayTudo.slice(335, i);     //-2
       }      
   if (i == 340){ // +3
       armazenn2 = armazen2ArrayTudo.slice(338, i);    //-2 
       }  
   if (i == 343){ // +3
       armazenn3 = armazen2ArrayTudo.slice(341, i);    //-2  
       }     
   if (i == 346){ // +3
       armazenn4 = armazen2ArrayTudo.slice(344, i);     //-2
       }    
   if (i == 349){ // +3
       armazenn5 = armazen2ArrayTudo.slice(347, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }         
              
           
             

  //------------------------------------------------------------------------    10
  if (i == 354){ // +5
   armazenConc = armazen2ArrayTudo.slice(350, i);// -4                   
   }          
   if (i == 359){ // +5
       armazenDia = armazen2ArrayTudo.slice(357, i); // -2    
       }      
   if (i == 362){ // +3
       armazenMes = armazen2ArrayTudo.slice(360, i); // -2    
       }       
   if (i == 367){ //+5
       armazenAno = armazen2ArrayTudo.slice(363, i); // -4    
       }      
   if (i == 372){  // +5
       armazenn1 = armazen2ArrayTudo.slice(370, i);     //-2
       }      
   if (i == 375){ // +3
       armazenn2 = armazen2ArrayTudo.slice(373, i);    //-2 
       }  
   if (i == 378){ // +3
       armazenn3 = armazen2ArrayTudo.slice(376, i);    //-2  
       }     
   if (i == 381){ // +3
       armazenn4 = armazen2ArrayTudo.slice(379, i);     //-2
       }    
   if (i == 384){ // +3
       armazenn5 = armazen2ArrayTudo.slice(382, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }         

  //------------------------------------------------------------------------    11
  if (i == 389){ // +5
   armazenConc = armazen2ArrayTudo.slice(385, i);// -4                   
   }          
   if (i == 394){ // +5
       armazenDia = armazen2ArrayTudo.slice(392, i); // -2    
       }      
   if (i == 397){ // +3
       armazenMes = armazen2ArrayTudo.slice(395, i); // -2    
       }       
   if (i == 402){ //+5
       armazenAno = armazen2ArrayTudo.slice(398, i); // -4    
       }      
   if (i == 407){  // +5
       armazenn1 = armazen2ArrayTudo.slice(405, i);     //-2
       }      
   if (i == 410){ // +3
       armazenn2 = armazen2ArrayTudo.slice(408, i);    //-2 
       }  
   if (i == 413){ // +3
       armazenn3 = armazen2ArrayTudo.slice(411, i);    //-2  
       }     
   if (i == 416){ // +3
       armazenn4 = armazen2ArrayTudo.slice(414, i);     //-2
       }    
   if (i == 419){ // +3
       armazenn5 = armazen2ArrayTudo.slice(417, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }    

   //------------------------------------------------------------------------    12
  if (i == 424){ // +5
   armazenConc = armazen2ArrayTudo.slice(420, i);// -4                   
   }          
   if (i == 429){ // +5
       armazenDia = armazen2ArrayTudo.slice(427, i); // -2    
       }      
   if (i == 432){ // +3
       armazenMes = armazen2ArrayTudo.slice(430, i); // -2    
       }       
   if (i == 437){ //+5
       armazenAno = armazen2ArrayTudo.slice(433, i); // -4    
       }      
   if (i == 442){  // +5
       armazenn1 = armazen2ArrayTudo.slice(440, i);     //-2
       }      
   if (i == 445){ // +3
       armazenn2 = armazen2ArrayTudo.slice(443, i);    //-2 
       }  
   if (i == 448){ // +3
       armazenn3 = armazen2ArrayTudo.slice(446, i);    //-2  
       }     
   if (i == 451){ // +3
       armazenn4 = armazen2ArrayTudo.slice(449, i);     //-2
       }    
   if (i == 454){ // +3
       armazenn5 = armazen2ArrayTudo.slice(452, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }        


     //------------------------------------------------------------------------    13
  if (i == 459){ // +5
   armazenConc = armazen2ArrayTudo.slice(455, i);// -4                   
   }          
   if (i == 464){ // +5
       armazenDia = armazen2ArrayTudo.slice(462, i); // -2    
       }      
   if (i == 467){ // +3
       armazenMes = armazen2ArrayTudo.slice(465, i); // -2    
       }       
   if (i == 472){ //+5
       armazenAno = armazen2ArrayTudo.slice(468, i); // -4    
       }      
   if (i == 477){  // +5
       armazenn1 = armazen2ArrayTudo.slice(475, i);     //-2
       }      
   if (i == 480){ // +3
       armazenn2 = armazen2ArrayTudo.slice(478, i);    //-2 
       }  
   if (i == 483){ // +3
       armazenn3 = armazen2ArrayTudo.slice(481, i);    //-2  
       }     
   if (i == 486){ // +3
       armazenn4 = armazen2ArrayTudo.slice(484, i);     //-2
       }    
   if (i == 489){ // +3
       armazenn5 = armazen2ArrayTudo.slice(487, i);     //-2
       TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
       + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
       armazenn4 + virgula + sep + armazenn5 + parenth + sep;
       }    


       //------------------------------------------------------------------------    14
       if (i == 494){ // +5
         armazenConc = armazen2ArrayTudo.slice(490, i);// -4                   
         }          
         if (i == 499){ // +5
             armazenDia = armazen2ArrayTudo.slice(497, i); // -2    
             }      
         if (i == 502){ // +3
             armazenMes = armazen2ArrayTudo.slice(500, i); // -2    
             }       
         if (i == 507){ //+5
             armazenAno = armazen2ArrayTudo.slice(503, i); // -4    
             }      
         if (i == 512){  // +5
             armazenn1 = armazen2ArrayTudo.slice(510, i);     //-2
             }      
         if (i == 515){ // +3
             armazenn2 = armazen2ArrayTudo.slice(513, i);    //-2 
             }  
         if (i == 518){ // +3
             armazenn3 = armazen2ArrayTudo.slice(516, i);    //-2  
             }     
         if (i == 521){ // +3
             armazenn4 = armazen2ArrayTudo.slice(519, i);     //-2
             }    
         if (i == 524){ // +3
             armazenn5 = armazen2ArrayTudo.slice(522, i);     //-2
             TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
             + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
             armazenn4 + virgula + sep + armazenn5 + parenth + sep;
             }      
             
      //------------------------------------------------------------------------    15
      if (i == 529){ // +5
       armazenConc = armazen2ArrayTudo.slice(525, i);// -4                   
       }          
       if (i == 534){ // +5
           armazenDia = armazen2ArrayTudo.slice(532, i); // -2    
           }      
       if (i == 537){ // +3
           armazenMes = armazen2ArrayTudo.slice(535, i); // -2    
           }       
       if (i == 542){ //+5
           armazenAno = armazen2ArrayTudo.slice(538, i); // -4    
           }      
       if (i == 547){  // +5
           armazenn1 = armazen2ArrayTudo.slice(545, i);     //-2
           }      
       if (i == 550){ // +3
           armazenn2 = armazen2ArrayTudo.slice(548, i);    //-2 
           }  
       if (i == 553){ // +3
           armazenn3 = armazen2ArrayTudo.slice(551, i);    //-2  
           }     
       if (i == 556){ // +3
           armazenn4 = armazen2ArrayTudo.slice(554, i);     //-2
           }    
       if (i == 559){ // +3
           armazenn5 = armazen2ArrayTudo.slice(557, i);     //-2
           TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
           + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
           armazenn4 + virgula + sep + armazenn5 + parenth + sep;
           }    
           //------------------------------------------------------------------------    16
      if (i == 564){ // +5
        armazenConc = armazen2ArrayTudo.slice(560, i);// -4                   
        }          
        if (i == 569){ // +5
            armazenDia = armazen2ArrayTudo.slice(567, i); // -2    
            }      
        if (i == 572){ // +3
            armazenMes = armazen2ArrayTudo.slice(570, i); // -2    
            }       
        if (i == 577){ //+5
            armazenAno = armazen2ArrayTudo.slice(573, i); // -4    
            }      
        if (i == 582){  // +5
            armazenn1 = armazen2ArrayTudo.slice(580, i);     //-2
            }      
        if (i == 585){ // +3
            armazenn2 = armazen2ArrayTudo.slice(583, i);    //-2 
            }  
        if (i == 588){ // +3
            armazenn3 = armazen2ArrayTudo.slice(586, i);    //-2  
            }     
        if (i == 591){ // +3
            armazenn4 = armazen2ArrayTudo.slice(589, i);     //-2
            }    
        if (i == 594){ // +3
            armazenn5 = armazen2ArrayTudo.slice(592, i);     //-2
            TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
            + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
            armazenn4 + virgula + sep + armazenn5 + parenth + sep;
            }    
             //------------------------------------------------------------------------    17
      if (i == 599){ // +5
        armazenConc = armazen2ArrayTudo.slice(594, i);// -4                   
        }          
        if (i == 604){ // +5
            armazenDia = armazen2ArrayTudo.slice(602, i); // -2    
            }      
        if (i == 607){ // +3
            armazenMes = armazen2ArrayTudo.slice(605, i); // -2    
            }       
        if (i == 612){ //+5
            armazenAno = armazen2ArrayTudo.slice(608, i); // -4    
            }      
        if (i == 617){  // +5
            armazenn1 = armazen2ArrayTudo.slice(615, i);     //-2
            }      
        if (i == 620){ // +3
            armazenn2 = armazen2ArrayTudo.slice(618, i);    //-2 
            }  
        if (i == 623){ // +3
            armazenn3 = armazen2ArrayTudo.slice(621, i);    //-2  
            }     
        if (i == 626){ // +3
            armazenn4 = armazen2ArrayTudo.slice(624, i);     //-2
            }    
        if (i == 629){ // +3
            armazenn5 = armazen2ArrayTudo.slice(627, i);     //-2
            TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
            + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
            armazenn4 + virgula + sep + armazenn5 + parenth + sep;
            }    
     //------------------------------------------------------------------------    18
     if (i == 634){ // +5
      armazenConc = armazen2ArrayTudo.slice(630, i);// -4                   
      }          
      if (i == 639){ // +5
          armazenDia = armazen2ArrayTudo.slice(637, i); // -2    
          }      
      if (i == 642){ // +3
          armazenMes = armazen2ArrayTudo.slice(640, i); // -2    
          }       
      if (i == 647){ //+5
          armazenAno = armazen2ArrayTudo.slice(643, i); // -4    
          }      
      if (i == 652){  // +5
          armazenn1 = armazen2ArrayTudo.slice(650, i);     //-2
          }      
      if (i == 655){ // +3
          armazenn2 = armazen2ArrayTudo.slice(653, i);    //-2 
          }  
      if (i == 658){ // +3
          armazenn3 = armazen2ArrayTudo.slice(656, i);    //-2  
          }     
      if (i == 661){ // +3
          armazenn4 = armazen2ArrayTudo.slice(659, i);     //-2
          }    
      if (i == 664){ // +3
          armazenn5 = armazen2ArrayTudo.slice(662, i);     //-2
          TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
          + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
          armazenn4 + virgula + sep + armazenn5 + parenth + sep;
          }    
          
     //------------------------------------------------------------------------    19
     if (i == 669){ // +5
      armazenConc = armazen2ArrayTudo.slice(665, i);// -4                   
      }          
      if (i == 674){ // +5
          armazenDia = armazen2ArrayTudo.slice(672, i); // -2    
          }      
      if (i == 677){ // +3
          armazenMes = armazen2ArrayTudo.slice(675, i); // -2    
          }       
      if (i == 682){ //+5
          armazenAno = armazen2ArrayTudo.slice(678, i); // -4    
          }      
      if (i == 687){  // +5
          armazenn1 = armazen2ArrayTudo.slice(685, i);     //-2
          }      
      if (i == 690){ // +3
          armazenn2 = armazen2ArrayTudo.slice(688, i);    //-2 
          }  
      if (i == 693){ // +3
          armazenn3 = armazen2ArrayTudo.slice(691, i);    //-2  
          }     
      if (i == 696){ // +3
          armazenn4 = armazen2ArrayTudo.slice(694, i);     //-2
          }    
      if (i == 699){ // +3
          armazenn5 = armazen2ArrayTudo.slice(697, i);     //-2
          TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
          + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
          armazenn4 + virgula + sep + armazenn5 + parenth + sep;
          }    
  //------------------------------------------------------------------------    20
  if (i == 704){ // +5
    armazenConc = armazen2ArrayTudo.slice(700, i);// -4                   
    }          
    if (i == 709){ // +5
        armazenDia = armazen2ArrayTudo.slice(707, i); // -2    
        }      
    if (i == 712){ // +3
        armazenMes = armazen2ArrayTudo.slice(710, i); // -2    
        }       
    if (i == 717){ //+5
        armazenAno = armazen2ArrayTudo.slice(713, i); // -4    
        }      
    if (i == 822){  // +5
        armazenn1 = armazen2ArrayTudo.slice(820, i);     //-2
        }      
    if (i == 825){ // +3
        armazenn2 = armazen2ArrayTudo.slice(823, i);    //-2 
        }  
    if (i == 828){ // +3
        armazenn3 = armazen2ArrayTudo.slice(826, i);    //-2  
        }     
    if (i == 831){ // +3
        armazenn4 = armazen2ArrayTudo.slice(829, i);     //-2
        }    
    if (i == 834){ // +3
        armazenn5 = armazen2ArrayTudo.slice(832, i);     //-2
        TUDO = TUDO + quinaone + armazenConc + virgula + sep + armazenDia + virgula + sep + armazenMes + virgula + sep + armazenAno
        + virgula + sep + armazenn1 + virgula + sep + armazenn2 + virgula + sep + armazenn3 + virgula + sep +
        armazenn4 + virgula + sep + armazenn5 + parenth + sep;
        }            
              
          
    }            
             
        document.getElementById("quinatxtC").innerHTML = TUDO;
}

 
      function apagar(){
       document.getElementById("quinaTextArea").value = "";
       document.getElementById("quinaTextAreaB").value = "";
       document.getElementById("quinaTextAreaC").value = "";
       document.getElementById("quinatxtC").innerHTML = "";
       document.getElementById("quinatxtB").innerHTML = "";
       document.getElementById("quinatxt").innerHTML = "";
      }

    
