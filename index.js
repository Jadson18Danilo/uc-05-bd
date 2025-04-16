import CriarTabela from './src/config/criar_tabela.js';
import prompt from 'prompt-sync';

const input = prompt();

async function criarTabelas() {
    try {
        await CriarTabela.curso();
        await CriarTabela.aluno();
        await CriarTabela.professor();
        console.log('Tabelas criadas com sucesso!');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    }
}
criarTabelas();




AlunoView.criar();
AlunoView.listarTodos();

AlunoView.editarAluno();
AlunoView.deletarAluno();
AlunoView.totalAlunos();
AlunoView.deletarTodos();
