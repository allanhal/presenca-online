https://github.com/rguilhermelins/presenca-online

https://www.websequencediagrams.com/

https://miro.com/welcomeonboard/ak5kRFBaNWRsOExUWElmOTlNbmJDdFp1c21HUXV3Sk9DUTRBUTFLTTNJRUVFN25pbG5QeG1YWFdrdGlFaTA2RnwzNDU4NzY0NTg1Mzg4Nzc1NDMzfDI=?share_link_id=639306418575

====================== WEB SEQUENCE DIAGRAM
title Presença Online

actor Professor
actor Aluno

Professor->PaginaProfessor: Entra na página
PaginaProfessor->PaginaProfessor: Insere dados da presença
PaginaProfessor->Api-qrcode: Gera QRCODE
Api-qrcode->PaginaProfessor: Retorna QRCODE
Aluno->PaginaProfessor: Lê QRCODE
PaginaProfessor->PaginaAluno: Abra Pagina Aluno
PaginaAluno->PaginaAluno: Insere o nome
PaginaAluno->Servidor: Envia dados
Servidor->Servidor: Salva em memória
Servidor->PaginaAluno: Presença confirmada e botão desabilitado
PaginaAluno->Aluno: Feedback presença
Professor->PaginaProfessor: Atualizar presença
PaginaProfessor->Servidor: Requisita dados da presença
Servidor->Servidor: Recuperar os dados da memória
Servidor->PaginaProfessor: Retorna dados da presença
PaginaProfessor->Professor: Visualiza lista de presença lista de presença
====================== WEB SEQUENCE DIAGRAM
