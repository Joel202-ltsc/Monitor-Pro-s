import { Activity, AudioLines, BookOpen, Download, FileText, Music2, Radio, RefreshCw, Settings2, ShieldCheck } from 'lucide-react';

const downloadUrl = 'https://github.com/Joel202-ltsc/monitorpro-releases/releases/download/v2026.9.26/Monitor-Pro-Setup-2026.9.26-x64.exe';
const features = [
  [Radio, 'Monitoramento multi-deck', 'Acompanhe vários streams e decks da operação em uma única tela.'],
  [Music2, 'Identificação musical', 'Música, artista, capa e origem por RDS, Pulsar, catálogo e reconhecimento.'],
  [Activity, 'Logs técnicos', 'Eventos de sistema, aplicativo, stream, música e cache por categoria.'],
  [AudioLines, 'Áudio e conexão', 'Medidores de áudio, status do endpoint, reconexão e saídas por deck.'],
  [BookOpen, 'Programação e histórico', 'Programas, horários e histórico musical de cada deck.'],
  [FileText, 'Relatórios em PDF', 'Relatórios por deck e período com música, artista, origem e horário.'],
  [RefreshCw, 'Atualizações remotas', 'Novas versões instaladas preservando as configurações.'],
  [Settings2, 'Operação configurável', 'Endpoints, atraso de áudio, inicialização e saídas de áudio.'],
] as const;
const shots = [
  ['/images/04-streams-multideck.png', 'Streams e decks', 'Reprodução, níveis de áudio e identificação em tempo real.'],
  ['/images/02-historico-musical.png', 'Histórico musical', 'Faixas identificadas e organizadas por horário e deck.'],
  ['/images/03-logs-tecnicos.png', 'Logs internos', 'Diagnóstico técnico categorizado para operação.'],
  ['/images/06-grade-programacao.png', 'Grade de programação', 'Programas e status ao vivo por deck.'],
  ['/images/01-configuracoes.png', 'Configurações', 'Áudio, atraso, endpoints e saídas por deck.'],
  ['/images/09-relatorio-programacao.png', 'Relatório musical', 'Programação e origem das informações.'],
] as const;

export default function App() {
  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#inicio">
          <img className="brand-icon" src="/icon.png" alt="Ícone Monitor Pro" width="28" height="28" />
          <span className="brand-title">Monitor Pro</span>
        </a>
        <nav>
          <a href="#recursos">Recursos</a>
          <a href="#telas">Telas</a>
          <a href="#relatorios">Relatórios</a>
          <a href="#atualizacoes">Atualizações</a>
        </nav>
        <a
          className="nav-download"
          href={downloadUrl}
          download="Monitor-Pro-Setup-2026.9.26-x64.exe"
          title="Baixar instalador Monitor Pro para Windows"
        >
          <Download size={16} /> Baixar
        </a>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> OPERAÇÃO JOVEM PAN
            </p>
            <h1>
              Monitoramento de rádio <em>em tempo real.</em>
            </h1>
            <p className="lead">
              Monitor Pro centraliza streams, decks, identificação musical, programação, relatórios e eventos técnicos para a operação da Jovem Pan.
            </p>
            <div className="actions">
              <a
                className="primary"
                href={downloadUrl}
                download="Monitor-Pro-Setup-2026.9.26-x64.exe"
                title="Baixar instalador Monitor Pro para Windows"
              >
                <Download size={18} /> Baixar para Windows
              </a>
              <a className="secondary" href="#recursos">
                Conhecer recursos
              </a>
            </div>
            <div className="trust-row">
              <ShieldCheck size={18} /> Atualizações remotas integradas · Windows 10 e 11
            </div>
          </div>
          <div className="hero-screen">
            <div className="screen-top">
              <span className="live-dot" /> MONITOR PRO · STREAMS
            </div>
            <img src="/images/04-streams-multideck.png" alt="Painel de streams e decks do Monitor Pro" />
          </div>
        </section>

        <section className="stats">
          <div>
            <strong>Multi-deck</strong>
            <span>streams em uma operação</span>
          </div>
          <div>
            <strong>RDS + Pulsar</strong>
            <span>identificação de músicas</span>
          </div>
          <div>
            <strong>Logs internos</strong>
            <span>diagnóstico categorizado</span>
          </div>
          <div>
            <strong>Relatórios</strong>
            <span>programação em PDF</span>
          </div>
        </section>

        <section className="section" id="recursos">
          <div className="section-heading">
            <p className="eyebrow">
              <span /> RECURSOS CONFIRMADOS
            </p>
            <h2>Uma visão clara para quem opera.</h2>
            <p>Funções reais do Monitor Pro, organizadas para acompanhar a programação e os streams da operação.</p>
          </div>
          <div className="feature-grid">
            {features.map(([Icon, title, text]) => (
              <article className="feature" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section screenshots" id="telas">
          <div className="section-heading compact">
            <p className="eyebrow">
              <span /> TELAS REAIS
            </p>
            <h2>O Monitor Pro em operação.</h2>
            <p>Capturas reais do software, sem simulações e sem imagens externas.</p>
          </div>
          <div className="shot-grid">
            {shots.map(([src, title, text], index) => (
              <figure className={`shot shot-${index}`} key={title}>
                <img src={src} alt={title} />
                <figcaption>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="split-section" id="relatorios">
          <div>
            <p className="eyebrow">
              <span /> RELATÓRIOS
            </p>
            <h2>Da reprodução ao relatório.</h2>
            <p>
              Selecione o deck e o período. O Monitor Pro organiza as músicas reconhecidas com data, horário, artista, origem e link base para consulta operacional.
            </p>
            <ul>
              <li>Filtro por deck e período</li>
              <li>Histórico de programação musical</li>
              <li>Exportação em PDF</li>
            </ul>
          </div>
          <div className="report-stack">
            <img src="/images/08-configurar-relatorio.png" alt="Configuração de relatório no Monitor Pro" />
            <img src="/images/09-relatorio-programacao.png" alt="Relatório de programação musical do Monitor Pro" />
          </div>
        </section>

        <section className="update-section" id="atualizacoes">
          <div className="update-copy">
            <p className="eyebrow">
              <span /> ATUALIZAÇÕES
            </p>
            <h2>Sempre atualizado, sem complicação.</h2>
            <p>
              O próprio Monitor Pro verifica, baixa e instala novas versões. Seus decks e configurações locais são preservados durante a atualização.
            </p>
            <a
              className="primary"
              href={downloadUrl}
              download="Monitor-Pro-Setup-2026.9.26-x64.exe"
              title="Baixar versão mais recente do Monitor Pro"
            >
              <Download size={18} /> Baixar versão mais recente
            </a>
          </div>
          <img src="/images/07-atualizacoes-diagnostico.png" alt="Tela de atualizações e diagnóstico" />
        </section>

        <section className="download-band">
          <img className="download-band-icon" src="/icon.png" alt="Monitor Pro" width="48" height="48" />
          <div>
            <h2>Pronto para acompanhar sua operação?</h2>
            <p>Baixe a versão mais recente do Monitor Pro para Windows.</p>
          </div>
          <a
            className="primary"
            href={downloadUrl}
            download="Monitor-Pro-Setup-2026.9.26-x64.exe"
            title="Baixar instalador Monitor Pro para Windows"
          >
            Baixar Monitor Pro <Download size={18} />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand" href="#inicio">
          <img className="brand-icon" src="/icon.png" alt="Ícone Monitor Pro" width="28" height="28" />
          <span className="brand-title">Monitor Pro</span>
        </a>
        <p>Central de operação e streams Jovem Pan.</p>
        <small>© 2026 Monitor Pro.</small>
      </footer>
    </div>
  );
}
