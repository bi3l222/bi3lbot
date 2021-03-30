exports.wait = () => {
	return`*【 ESPERE】OK, ESPERE ESTOU FAZENDO...*`
}

exports.succes = () => {
	return`*【 SUCESSO】*`
}

exports.lvlon = () => {
	return`*【 ATIVAR】NIVELAMENTO*`
}

exports.lvloff = () => {
	return`*【 DESATIVAR】NIVELAMENTO*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O MODO NIVELAMENTO NÃO ESTÁ ATIVO NESTE GRUPO*`
}

exports.stikga = () => {
	return`*erro*`
}

exports.linkga = () => {
	return`*Desculpe, o link é inválido*`
}

exports.groupo = () => {
	return`*【SÓ EM GRUPOS】*`
}

exports.ownerb = () => {
	return`*【SÓ O BI3L】*`
}

exports.ownerg = () => {
	return`*【SOMENTE ADMS】*`
}

exports.admin = () => {
	return`*【SOMENTE ADMINISTRADORES】*`
}

exports.badmin = () => {
	return`*【O BOT DEVE SER ADMINISTRADOR】*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTÁ DESLIGADO*`
}

exports.bug = () => {
	return`*O problema foi relatado ao BI3L, Relatórios falsos ou confusos não serão respondidos.*`
}

exports.wrongf = () => {
	return`*Formato incorreto*`
}

exports.clears = () => {
	return`*SUCESSO EM APAGAR TODAS CONVERSAS*`
}

exports.pc = () => {
	return`*【 CADASTRO】*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*Se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe ${pushname}*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA : USE O MENU PARA GANHAR XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTA: USE O MENU PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTA: USE O MENU PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTA: USE O MENU PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente *\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTA: USE O MENU PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTA: CHAT / SEMPRE PARA OBTER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*【 PARABÉNS】*
 📊➤ Nome : ${pushname}
 📊➤ Número : ${sender.split("@")[0]}
 📊➤ Xp : ${getLevelingXp(sender)}
 📊➤ Limite :  +3
 📊➤ Classificação :  ${role}
 📊➤ Nível : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje aumentou*\n*Contate-Nos*\n\n*Nota: Daremos aleatoriamente de 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*【 SEU LIMITE】*
o resto do seu limite : ${limitCounts}

NOTA: Para obter o limite. Você pode subir de nível por meio de grupos.
`}

exports.satukos = () => {
	return`*Adicionar parâmetros 1/habilitar ou 0 / desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *【 ATM】*\n  ├─ ❏ *Nome* : ${pushname}\n  ├─ ❏ *Número* : ${sender.split("@")[0]}\n  └─ ❏ *Dinheiro* : ${uangkau}
`}
