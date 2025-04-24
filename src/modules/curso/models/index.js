import client from "../../../config/database.js";

class CursoModel{
    static async criar(cod_curso, nome){
        const dados = [cod_curso, nome]
        const consulta = `insert into curso(cod_curso, nome)
        values ($1, $2) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async listarTodas(){
        const consulta = `select * from curso;`
        const resultado = await client.query(consulta);
        return resultado.rows;
    }

    static async listarPorCodigo(cod_curso){
        const dados = [cod_curso]
        const consulta = `select * from curso where cod_curso = $1;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async atualizarcurso(cod_curso, nome){
        const dados = [cod_curso, nome]
        const consulta = `update curso set nome = $2 where cod_curso = $1 returning *;`
        const resultado = await client.query(consulta, dados);
        return resultados.rows;
    }

    static async deletarTodos(){
        const consulta = `delete from curso;`
        await client.query(consulta);
    }

    static async totalcursos(){
        const consulta = `select count(cod_curso) as total from aluno;`
        const resultado = await client.query(consulta);
        return resultado.rows
    }
}

export default CursoModel;