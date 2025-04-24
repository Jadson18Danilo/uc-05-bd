import client from "../../../config/database.js";

class TurmaModel{
    static async criar(cod_turma, nome){
        const dados = [cod_turma, nome]
        const consulta = `insert into turma(cod_turma, nome)
        values ($1, $2) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async listarTodas(){
        const consulta = `select * from turma;`
        const resultado = await client.query(consulta);
        return resultado.rows;
    }

    static async listarPorCodigo(cod_turma){
        const dados = [cod_turma]
        const consulta = `select * from turma where cod_turma = $1;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async atualizarTurma(cod_turma, nome){
        const dados = [cod_turma, nome]
        const consulta = `update turma set nome = $2 where cod_turma = $1 returning *;`
        const resultado = await client.query(consulta, dados);
        return resultados.rows;
    }

    static async deletarTodos(){
        const consulta = `delete from turma;`
        await client.query(consulta);
    }

    static async totalTurmas(){
        const consulta = `select count(cod_turma) as total from aluno;`
        const resultado = await client.query(consulta);
        return resultado.rows
    }
}

export default TurmaModel;