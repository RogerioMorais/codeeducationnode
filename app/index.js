const express=require('express')
const app=express()
const port=3000
const config={
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
app.get('/', (req,res)=>{
    var mysql=require('mysql')
    var connection=mysql.createConnection(config);
    var sql="INSERT INTO desafionode(nome) values ('Rogerio');"
    connection.query(sql);
    let out="<ol>";
    connection.query("SELECT nome FROM desafionode",function(err,result){
        if(err) throw err;
        
        result.forEach(element => {
            out=out+"<li>"+element.nome+"</li>";
            console.log(element.nome);        
        });
        out+="</ol>";
        console.log(out);
        connection.end();
        res.send('<h1>Full Cycle Rocks!</h1>'+out)
    });
})

app.listen(port,()=>{
    console.log('Rodando na porta '+port)
})