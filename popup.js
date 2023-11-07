document.addEventListener('DOMContentLoaded', function() {

  var nucleoSelect = document.getElementById('nucleo');
  var turnoSelect = document.getElementById('turno');
  var link1TurnoInput = document.getElementById('link_1_turno');
  var link2TurnoInput = document.getElementById('link_2_turno');
  var iniciarVotacaoSelect = document.getElementById('iniciar_votacao');
  var eventoInput = document.getElementById('evento');


  nucleoSelect.innerHTML = '';

 const option = document.createElement('option');
 option.value = '';
 option.textContent = 'Selecione um Núcleo/Dav';
  nucleoSelect.appendChild(option);

  nucleos.forEach((nucleo) => {
    const option = document.createElement('option');
    option.value = nucleo;
    option.textContent = nucleo;
    nucleoSelect.appendChild(option);
  });



  // Restaura as seleções anteriores do armazenamento
  chrome.storage.local.get(['nucleo', 'turno', 'link1Turno', 'link2Turno', 'iniciarVotacao', 'evento'], function(result) {
    nucleoSelect.value = result.nucleo || 'agua_boa';
    turnoSelect.value = result.turno || 'primeiro_turno';
    link1TurnoInput.value = result.link1Turno || 'Link padrão para o 1º turno';
    link2TurnoInput.value = result.link2Turno || 'Link padrão para o 2º turno';
    iniciarVotacaoSelect.value = result.iniciarVotacao || '0';
    eventoInput.value = result.evento || 'Eleição da Diretoria e Conselho Fiscal';
  });

  // Adiciona ouvintes de evento para salvar alterações
  nucleoSelect.addEventListener('change', function() {
    chrome.storage.local.set({'nucleo': nucleoSelect.value});
  });

  turnoSelect.addEventListener('change', function() {
    chrome.storage.local.set({'turno': turnoSelect.value});
  });

  link1TurnoInput.addEventListener('input', function() {
    chrome.storage.local.set({'link1Turno': link1TurnoInput.value});
  });

  link2TurnoInput.addEventListener('input', function() {
    chrome.storage.local.set({'link2Turno': link2TurnoInput.value});
  });

  iniciarVotacaoSelect.addEventListener('change', function() {
    chrome.storage.local.set({'iniciarVotacao': iniciarVotacaoSelect.value});
  });

  eventoInput.addEventListener('input', function() {
    chrome.storage.local.set({'evento': eventoInput.value});
  });

    function validarCampos() {
      // Verifica se os campos principais estão preenchidos
      if (nucleoSelect.value.trim() === '' ||
          turnoSelect.value.trim() === '' ||
          link1TurnoInput.value.trim() === '' ||
          iniciarVotacaoSelect.value.trim() === '' ||
          eventoInput.value.trim() === '') {
        return false; // Retorna false se algum campo obrigatório estiver vazio
      }

      // Se o turno selecionado for 'segundo_turno', o link do segundo turno também é necessário
      if (turnoSelect.value === 'segundo_turno' && link2TurnoInput.value.trim() === '') {
        return false;
      }

      return true; // Retorna true se todas as validações passarem
    }



      document.getElementById('submit').addEventListener('click', function() {
      if (validarCampos()) {
        chrome.storage.local.set({
          'nucleo': nucleoSelect.value,
          'turno': turnoSelect.value,
          'link1Turno': link1TurnoInput.value,
          'link2Turno': link2TurnoInput.value, // Este campo agora é condicionalmente obrigatório
          'iniciarVotacao': iniciarVotacaoSelect.value,
          'evento': eventoInput.value
        }, function() {
          // Informa o usuário de que as configurações foram salvas.
          alert('Configurações salvas!');
        });
      } else {
        // Informa o usuário de que há campos obrigatórios não preenchidos.
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
});
