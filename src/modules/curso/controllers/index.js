import CursoModel from "../models/index.js";

class CursoController{
    static async criar(cod_curso, nome){
        try {
            if(!cod_curso || !nome){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const curso = await CursoModel.criar(cod_curso, nome);
            console.log('Curso criada com sucesso!');
            return curso;

        } catch (error) {
            console.log('Erro ao criar curso', error.message);
        }
    }

    static async editar(cod_curso, nome){
        try {
            if(!cod_curso || !nome){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const curso = await CursoModel.atualizarCurso(cod_curso, nome);
            if(curso.length === 0){
                return console.error('Curso não encontrada.');
            }

            console.log('Curso atualizada com sucesso!');
            return curso

        } catch (error) {
            console.log('Erro ao atualizar curso', error.message);
        }
    }

    static async deletarcurso(cod_curso){
        try {
            const curso = CursoModel.listarPorCodigo(cod_curso);
            if(curso.length === 0){
                return console.error('Curso não encontrada.');
            }
            await CursoModel.deletarCurso(cod_curso);
            console.log('Curso excluída com sucesso!');

        } catch (error) {
            console.log('Erro ao deletar curso', error.message);
        }
    }

    static async deletarTodas(){
        try {
            await CursoModel.deletarTodas();
            console.log('cursos deletadas com sucesso!');
        } catch (error) {
            console.log('Erro ao deletar curso', error.message);
        }
    }

    static async listarTodas(){
        try {
            const cursos = await CursoModel.listarTodas();
            if(cursos.length === 0){
                return console.log('Nenhuma curso a ser exibida!');
            }
            console.log('Listagem de cursos: ');
            return cursos;
        } catch (error) {
            console.log('Erro ao listar cursos', error.message);
        }
    }

    static async listarPorCodigo(cod_curso){
        try {
            const curso = await CursoModel.listarPorCodigo(cod_curso);
            if(curso.length === 0){
                return console.log('curso não encontrada!');
            }
            console.log('curso: ');
            return curso;
        } catch (error) {
            console.log('Erro ao listar curso', error.message);
        }
    }

    static async totalCursos(){
        try {
            const total = await CursoModel.totalCursos();
            if(total.length === 0){
                return console.error('Não há cursos a serem exibidas.');
            }
            return total;
        } catch (error) {
            console.log('Erro ao encontrar cursos', error.message);
        }
    }
    static async listarAlunosPorCurso(cod_curso){
        try {
            const curso = await CursoModel.listarProfessoresPorCurso(cod_curso)
            if(curso.length === 0){
                return console.log('Professor não encontrado!')
            }
            console('Professores: ')
            //termnar aqui
        } catch (error) {
            
        }
    }
}

export default CursoController;