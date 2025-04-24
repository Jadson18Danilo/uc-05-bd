import TurmaModel from "../models/index.js";

class TurmaController{
    static async criar(cod_turma, nome){
        try {
            if(!cod_turma || !nome){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const turma = await TurmaModel.criar(cod_turma, nome);
            console.log('Turma criada com sucesso!');
            return turma;

        } catch (error) {
            console.log('Erro ao criar turma', error.message);
        }
    }

    static async editar(cod_turma, nome){
        try {
            if(!cod_turma || !nome){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const turma = await TurmaModel.atualizarTurma(cod_turma, nome);
            if(turma.length === 0){
                return console.error('Turma não encontrada.');
            }

            console.log('Turma atualizada com sucesso!');
            return turma

        } catch (error) {
            console.log('Erro ao atualizar turma', error.message);
        }
    }

    static async deletarTurma(cod_turma){
        try {
            const turma = TurmaModel.listarPorCodigo(cod_turma);
            if(turma.length === 0){
                return console.error('Turma não encontrada.');

            }
            await TurmaModel.deletarTurma(cod_turma);
            console.log('Turma excluída com sucesso!');

        } catch (error) {
            console.log('Erro ao deletar turma', error.message);
        }
    }

    static async deletarTodas(){
        try {
            await TurmaModel.deletarTodas();
            console.log('Turmas deletadas com sucesso!');
        } catch (error) {
            console.log('Erro ao deletar turma', error.message);
        }
    }

    static async listarTodas(){
        try {
            const turmas = await TurmaModel.listarTodas();
            if(turmas.length === 0){
                return console.log('Nenhuma turma a ser exibida!');
            }
            console.log('Listagem de turmas: ');
            return turmas;
        } catch (error) {
            console.log('Erro ao listar turmas', error.message);
        }
    }

    static async listarPorCodigo(cod_turma){
        try {
            const turma = await TurmaModel.listarPorCodigo(cod_turma);
            if(turma.length === 0){
                return console.log('Turma não encontrada!');
            }
            console.log('Turma: ');
            return turma;
        } catch (error) {
            console.log('Erro ao listar turma', error.message);
        }
    }

    static async totalTurmas(){
        try {
            const total = await TurmaModel.totalTurmas();
            if(total.length === 0){
                return console.error('Não há turmas a serem exibidas.');
            }
            return total;

        } catch (error) {
            console.log('Erro ao encontrar turmas', error.message);
        }
    }
}

export default TurmaController;