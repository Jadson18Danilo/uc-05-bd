class ProfessorModel{
    static async criar(nome, matricula, cod_curso){
        const dados = [nome, matricula, cod_curso]
        const consulta = `insert into professor(nome, matricula, cod_curso) values (1%, 2%, 3%) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows
    }
    static async listarTodos(){
        const consulta = `select * from aluno`
        const resultado = await client.query(consulta)
        return resultado.rows
    }
    static async listarPorMatricula(matricula){
        const dados = [matricula]
        const consulta = `select * from professor where matricula = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    static async atualizarProfessor(nome, matricula, cod_curso){
        const dados = [nome, matricula, cod_curso]
        const consulta = `update professor set nome = $1, matricula = $2, cod_curso = $3 whre email = $2 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    static async deletarProfessor(matricula){
        const dados = [matricula]
        const consulta = `delete from aluno`
        await client.query(consulta,dados)
    }
    static async deletarTodos(){
        const consulta = `delete from aluno`
        await client.query(consulta)
    }
    static async totalProfessor(){
        const consulta = `select count(matricula) as total from professor`
        const resultado = await client.query(consulta)
        return resultado.rows
    }
}


export default ProfessorModel