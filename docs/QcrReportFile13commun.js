
//<![CDATA[
var gbCyclesSeuls = true;
var giSTEP = 500;
var giTranche = 0;
function lfRadioOnClick() {
   const laForme = document.querySelector("input[name='viewconfig']:checked");
   if (null!=laForme) {
      //console.log("lfRadioOnClick radio id :" + laForme.id);
      if (laForme.id=='tranche0') {
	       gbCyclesSeuls = true;
	       giTranche     = 0
      } else {
	       gbCyclesSeuls = false;
	       const liValue = laForme.value;
         //console.log("lfRadioOnClick radio value :" + liValue);
	       giTranche     = liValue
      }
      doDessiner();
   }
   return true;
}
var lesPkg=[];
function doTraiter(aeVal) {
	const resul = lesPkg.find(({datas}) => datas.valeur === aeVal);
	//console.log("main02 resul "+resul);
	if (resul===undefined) {
	   //console.log("main03 pas trouve "+aeVal+" ajoute");
	   var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] , "listecouleurs" : [] , "listetitle" : [] , "dansuncycle" : "false"} } ;
	   lesPkg.push(laVar);
	} else {
	   //console.log("main04 "+aeVal+" deja trouve");
	}
}
function doAffecter(aeValStart, aeValEnd) {
   const resul1 = lesPkg.find(({datas}) => datas.valeur === aeValStart);
   const resul2 = lesPkg.find(({datas}) => datas.valeur === aeValEnd);
   //console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
   //console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
   lesPkg[resul1.datas.rang].datas.listeappelles[resul2.datas.rang] = "X";
   lesPkg[resul1.datas.rang].datas.listetitle   [resul2.datas.rang] = "<a title='"+resul1.datas.valeur+" -> "+resul2.datas.valeur+"'>";
}
console.log("main01 Debut");
// Init avec les packages
var datadepend = datadependFct;
for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
   //console.log("main01 "+liInd);
   var leVal1 = datadepend.lesdatas[liInd].start; doTraiter(leVal1);
   var leVal2 = datadepend.lesdatas[liInd].end  ; doTraiter(leVal2);
   //console.log("main03 taille "+lesPkg.length);
}
lesPkg.sort((a, b) => a.datas.valeur > b.datas.valeur);
for (var liInd=0; liInd<lesPkg.length; liInd++) {
	lesPkg[liInd].datas.rang = liInd;
	for (var liCol=0; liCol<lesPkg.length; liCol++) {
	   lesPkg[liInd].datas.listeappelles[liCol]="";
	}
}
for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
	var leVal1 = datadepend.lesdatas[liInd].start;
	var leVal2 = datadepend.lesdatas[liInd].end  ;
	doAffecter(leVal1, leVal2);
}
for (var liCol=0; liCol<lesPkg.length; liCol++) {
	lesPkg[liCol].datas.listecouleurs[liCol] = "skyblue";
}
for (var liInd1=0; liInd1<datadepend.lescycles.length; liInd1++) {
   //console.log("main07 cycle "+liInd1);
   //for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
   //   console.log("main08    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
   //}
   var leEtapeZero = datadepend.lescycles[liInd1].uncycle[0].etape;
   var leEtapePrec = leEtapeZero;
   var liTaille    = datadepend.lescycles[liInd1].uncycle.length;
   // Boucle sur un element de plus pour le bouclage
   for (var liInd2=1; liInd2<=liTaille; liInd2++) {
	    if (liInd2<liTaille) { var leEtapeCour = datadepend.lescycles[liInd1].uncycle[liInd2].etape; }
	    else                 { var leEtapeCour = leEtapeZero; }
      //console.log("main09    entre "+leEtapePrec+" et "+leEtapeCour);
      const resul1 = lesPkg.find(({datas}) => datas.valeur === leEtapePrec);
      const resul2 = lesPkg.find(({datas}) => datas.valeur === leEtapeCour);
	    const rangEtapePrec = resul1.datas.rang;
	    const rangEtapeCour = resul2.datas.rang;
      //console.log("main10 resul "+resul1.datas.valeur + " " + rangEtapePrec);
      //console.log("main11 resul "+resul2.datas.valeur + " " + rangEtapeCour);
	    var rangMin = rangEtapePrec;
	    var rangMax = rangEtapeCour;
	    if (rangMin>rangMax) {
	       var poub = rangMax;
	       rangMax = rangMin;
	       rangMin = poub;
	    }
      for (var liCol=rangMin; liCol<rangMax; liCol++) {
         if (lesPkg[liCol]        .datas.listecouleurs[rangEtapeCour]===undefined) lesPkg[liCol]        .datas.listecouleurs[rangEtapeCour] = "red";
         if (lesPkg[rangEtapePrec].datas.listecouleurs[liCol]        ===undefined) lesPkg[rangEtapePrec].datas.listecouleurs[liCol]         = "red";
      }
	    // resul1 = ligne
	    // resul2 = colonne
	    lesPkg[rangEtapePrec].datas.listecouleurs[rangEtapeCour] = "lime"; // vert clair
      lesPkg[rangEtapePrec].datas.listeappelles[rangEtapeCour] += "|C"+liInd1+":"+liInd2+"/"+liTaille;
	    lesPkg[rangEtapePrec].datas.dansuncycle                  = "true";
	    lesPkg[rangEtapePrec].datas.listetitle   [rangEtapeCour] = "<a title='Cycle "+liInd1+" Etape "+liInd2+"/"+liTaille+": \n"+leEtapePrec+" -> "+leEtapeCour+"'>";
      leEtapePrec = leEtapeCour;
   }
}
function doDessiner() {
  var lsStr = "";
  lsStr+="<table border='1'>";
	lsStr+="<tr><td></td><td>Package, class, function</td>";
	for (var liCol=0; liCol<lesPkg.length; liCol++) {
	   if ( (gbCyclesSeuls==false && giSTEP*(giTranche-1)<=liCol && liCol<giSTEP*giTranche) || (gbCyclesSeuls==true && lesPkg[liCol].datas.dansuncycle=="true")) {
	      lsStr+="<td align='center'><a title='"+liCol+":"+lesPkg[liCol].datas.valeur+"'>"+liCol+"</a></td>";
	   }
	}
	lsStr+="</tr>";
  for (var liInd=0; liInd<lesPkg.length; liInd++) {
	   if ( (gbCyclesSeuls==false && giSTEP*(giTranche-1)<=liInd && liInd<giSTEP*giTranche)  || (gbCyclesSeuls==true && lesPkg[liInd].datas.dansuncycle=="true")) {
	      lsStr+="<tr><td align='right'>"+liInd+"</td><td>"+lesPkg[liInd].datas.valeur+"</td>";
	      lesPkg[liInd].datas.rang = liInd;
	      for (var liCol=0; liCol<lesPkg.length; liCol++) {
	         if ( (gbCyclesSeuls==false && giSTEP*(giTranche-1)<=liCol && liCol<giSTEP*giTranche)  || (gbCyclesSeuls==true && lesPkg[liCol].datas.dansuncycle=="true")) {
	            var lsBg = " align='center'";
	            var couleur = lesPkg[liInd].datas.listecouleurs[liCol];
	            if (couleur!='' && couleur!==undefined) { lsBg += " style='background-color:"+couleur+"'"; }
	            var title = lesPkg[liInd].datas.listetitle[liCol];
	            if (title===undefined) title="";
	            lsStr+="<td"+lsBg+">"+title+lesPkg[liInd].datas.listeappelles[liCol]+"</td>";
	         }
	      }
	   }
     lsStr+="</tr>";
  }
  // on copie la ligne du debut a la fin 
	lsStr+="<tr><td></td><td></td>";
	for (var liCol=0; liCol<lesPkg.length; liCol++) {
	   if ( (gbCyclesSeuls==false && giSTEP*(giTranche-1)<=liCol && liCol<giSTEP*giTranche)  || (gbCyclesSeuls==true && lesPkg[liCol].datas.dansuncycle=="true")) {
	      lsStr+="<td align='center'><a title='"+liCol+":"+lesPkg[liCol].datas.valeur+"'>"+liCol+"</a></td>";
	   }
	}
	lsStr+="</tr>";
  lsStr+="<br />";
  lsStr+="<table border='1'>";
  for (var liInd1=0; liInd1<datadepend.lescycles.length; liInd1++) {
     //console.log("main07 cycle "+liInd1);
     lsStr+="<tr><td>Cycle "+liInd1+"</td><td>Step</td></tr>";
     for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
        //console.log("main08    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
        lsStr+="<tr><td></td><td>"+datadepend.lescycles[liInd1].uncycle[liInd2].etape+"</td></tr>";
     }
  }
  lsStr+="</table>";
  //console.log("main02 lsStr "+lsStr);
  var theDivBloc = document.getElementById("maDiv");  
  theDivBloc.innerHTML = lsStr;
}
doDessiner();
console.log("main99 fin");
//]]>
