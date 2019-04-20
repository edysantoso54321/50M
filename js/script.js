var dr=2; var lr=0.1; var drp=2; var lrp=2; var neuron=[];var jumneuron=12;var data=[]; var np=6;
function dist(a,b){return Math.sqrt(Math.pow((a[0]-b[0]),2)+Math.pow((a[1]-b[1]),2));}
function fidt(a,b){return Math.exp((-1*Math.pow(dist(a,b),2))/(2*Math.pow(dr,2)));}
function delw(a,b,c,d){return lr*fidt(a,b)*(c[d]-b[d]);}
function findnearest(cell){
	jarak=10000000000000000000000;
	idx=0;
	for (var i=0; i<jumneuron; i++){x=dist(cell,neuron[i]); if(x<jarak){idx=i;jarak=x;}}
	return idx;
}
function preproses(cell){
    data.push(cell);
}