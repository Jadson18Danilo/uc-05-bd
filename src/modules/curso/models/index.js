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

    static async totalCursos(){
        const consulta = `select count(cod_curso) as total from aluno;`
        const resultado = await client.query(consulta);
        return resultado.rows
    }
    static async totalAlunosPorCurso(cod_curso){
        const dados = [cod_curso];
        const consulta = `select count(aluno.cod_curso) as total_aluno from 
        join aluno on curso.cod_curso =  aluno.cod_curso
        where aluno.cod_curso = $1`;
        const total_total_curso = await client.query(consulta, dados);
        return total_total_curso
    }

    static async listarAlunosPorCurso(cod_curso){
        const dados = [cod_curso];
        const consulta = `select count(aluno.cod_curso) as total_aluno from 
        join aluno on curso.cod_curso =  aluno.cod_curso
        where aluno.cod_curso = $1`;
        const resultado = await client.query(consulta,dados);
        return resultado.rows
    }
    static async listarProfessoresPorCurso(cod_curso){
        const dados = [cod_curso];
        const consulta = `select count(Professor.cod_curso) as total_Professor from 
        join Professor on curso.cod_curso =  Professor.cod_curso
        where Professor.cod_curso = $1`;
        const resultado = await client.query(consulta,dados);
        return resultado.rows
    }
}

export default CursoModel;