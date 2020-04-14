/**
 * JS - Aula5: Calculadora Flex
 * @author Wéber Parada
 */
var etanol,gasolina;
function calcular(){
        etanol = parseFloat(frmflex.txtEtanol.value.replace(",","."));
        gasolina = parseFloat(frmflex.txtGasolina.value.replace(",","."));
        if(etanol<0.7*gasolina){
            document.getElementById("status").src="etanol.png";
        }else{
            document.getElementById("status").src="gasolina.png";
        }



}