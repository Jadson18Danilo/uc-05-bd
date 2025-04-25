import CursoController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = Prompt();

class CursoView{
    static async criar(){
        const cod_curso = input("Digite o código da Curso: ");
        const nome = input("Digite o nome da Curso: ");
        const curso = await CursoController.criar(cod_curso, nome);
        console.table(curso);
    }

    static async editar(){
        const nome = input("Digite o novo nome da Curso: ");
        const curso = await CursoController.editar(nome);
        console.table(curso);
    }

    static async listarTodas(){
        const curso = await CursoController.listarTodas();
        console.table(curso);
    }

    static async listarPorCodigo(){
        const cod_curso = input("Digite o código da Curso: ");
        const curso = await CursoController.listarPorCodigo(cod_curso);
        console.table(curso);
    }

    static async deletarTodas(){
        await CursoController.deletarTodas();
    }

    static async deletarCurso(){
        const cod_curso = input("Digite o código da Curso: ");
        const curso = await CursoController.deletarCurso(cod_curso);
        console.table(curso)
    }

    static async totalCursos(){
        const total = await CursoController.totalCursos();
        console.table(total);
    }
}

export default CursoView;