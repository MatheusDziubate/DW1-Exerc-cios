        function funccalcalcular(){
            var nome = document.getElementById("nome").value;
            var ra = parseInt(document.getElementById("ra").value);
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);
            var nota4 = parseFloat(document.getElementById("nota4").value);
            var ME = parseFloat(document.getElementById("ME").value);

            let media = (nota1 + nota2 * 2 + nota3 * 3 + nota4 * 4 + ME) / 11;

            function conceito(media) {
                if (media >= 9) return "A";
                else if (media >= 7.5) return "B";
                else if (media >= 6) return "C";
                else if (media >= 4) return "D";
                else return "E";
            }

            var aprovado = media >= 6;
            var saida = document.getElementById("saida");

            saida.className = aprovado ? "aprovado" : "reprovado";
            saida.style.display = "block";
            saida.innerHTML =
                '<span class="resultado-media">' + media.toFixed(2) + '</span>' +
                '<div class="resultado-tags">' +
                    '<span class="resultado-conceito">Conceito ' + conceito(media) + '</span>' +
                    '<span class="resultado-situacao ' + (aprovado ? 'aprovado' : 'reprovado') + '">' +
                        (aprovado ? 'Aprovado' : 'Reprovado') +
                    '</span>' +
                '</div>' +
                '<div class="resultado-notas">' +
                    '<span>N1: ' + nota1 + '</span>' +
                    '<span>N2: ' + nota2 + '</span>' +
                    '<span>N3: ' + nota3 + '</span>' +
                    '<span>N4: ' + nota4 + '</span>' +
                    '<span>ME: ' + ME + '</span>' +
                '</div>' +
                '<div class="resultado-aluno">' + nome + ' &nbsp;·&nbsp; RA ' + ra + '</div>';
        }
