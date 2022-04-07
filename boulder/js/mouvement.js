let x=1;
let y=1;
let nbrDeplacement =0;
let nbrDiamantCollecté =0;
let compteur =0;

document.addEventListener("keyup", function(event){
        switch (event.code)
        {
            case 'ArrowUp':
            case 'KeyW' :
                if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('mur')===false){
                document.querySelector("#grille").children[x-1].children[y].className="player";
                document.querySelector("#grille").children[x].children[y].className="vide";
                x-=1;
                nbrDeplacement+=1;
                    }
                }
                break;
            
            case 'ArrowLeft':
            case 'KeyA' :
                if (document.querySelector("#grille").children[x].children[y-1].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x].children[y-1].classList.contains('mur')===false){
                    document.querySelector("#grille").children[x].children[y-1].className="player";
                    document.querySelector("#grille").children[x].children[y].className="vide";
                    y-=1;
                    nbrDeplacement+=1;
                    }
                }
                else if (document.querySelector("#grille").children[x].children[y-1].classList.contains('rocher')===true){
                    if(document.querySelector("#grille").children[x].children[y-2].classList.contains('vide')===true){
                        document.querySelector("#grille").children[x].children[y-2].className="rocher";
                        document.querySelector("#grille").children[x].children[y-1].className="player";
                        document.querySelector("#grille").children[x].children[y].className="vide";
                        y-=1;
                        nbrDeplacement+=1;
                    }
                }
                break;
                
            case 'ArrowDown':
            case 'KeyS' : 
            if (document.querySelector("#grille").children[x+1].children[y].classList.contains('rocher')===false){
                if (document.querySelector("#grille").children[x+1].children[y].classList.contains('mur')===false){
            document.querySelector("#grille").children[x+1].children[y].className="player";
            document.querySelector("#grille").children[x].children[y].className="vide";
            x+=1;
            nbrDeplacement+=1;
                }
            }
            if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher')===true){
                if(document.querySelector("#grille").children[x+1].children[y].classList.contains('rocher')===false){
                    document.querySelector("#grille").children[x].children[y].className='rocher';
                    document.querySelector("#grille").children[x-1].children[y].className='vide';
                    x=0;
                    y=0;
                    console.log('MORT');
                }
            }
                break;
                    
            case 'ArrowRight':
            case 'KeyD' :
                if (document.querySelector("#grille").children[x].children[y+1].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x].children[y+1].classList.contains('mur')===false){
                document.querySelector("#grille").children[x].children[y+1].className="player";
                document.querySelector("#grille").children[x].children[y].className="vide";
                y+=1;
                nbrDeplacement+=1;
                    }
                }
                else if (document.querySelector("#grille").children[x].children[y+1].classList.contains('rocher')===true){
                    if(document.querySelector("#grille").children[x].children[y+2].classList.contains('vide')===true){
                        document.querySelector("#grille").children[x].children[y+2].className="rocher";
                        document.querySelector("#grille").children[x].children[y+1].className="player";
                        document.querySelector("#grille").children[x].children[y].className="vide";
                        y+=1;
                        nbrDeplacement+=1;

                    }
                }
                break;
            default:
                break;
        }

    compteur=0;
    for (let i = 0; i < 32; ++i) {
        for (let j = 0; j < 16; ++j) {
            if(document.querySelector("#grille").children[j].children[i].classList.contains('rocher')===true){
                if(document.querySelector("#grille").children[j+1].children[i].classList.contains('vide')===true) {
                    document.querySelector("#grille").children[j+1].children[i].className='rocher';
                    document.querySelector("#grille").children[j].children[i].className='vide';
                }
            }
            if(document.querySelector("#grille").children[j].children[i].classList.contains('diamant')===true){
                compteur+=1;
            }
        }
    }
    nbrDiamantCollecté=nbrDiamant-compteur;
    console.log('nombre de diamant présents = ' + nbrDiamant + ' | nombre de diamant collectés = ' + nbrDiamantCollecté );
    if (nbrDiamant===nbrDiamantCollecté){
        console.log('VICTOIRE');
    }

});
