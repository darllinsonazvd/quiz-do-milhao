import QuestionModel from '../../models/question'
import ResponseModel from '../../models/response'

const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual bicho trasmite a Doença de Chagas?', [
    ResponseModel.isWrong('Abelha'),
    ResponseModel.isWrong('Barata'),
    ResponseModel.isWrong('Pulga'),
    ResponseModel.isRight('Barbeiro')
  ]),
  new QuestionModel(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      ResponseModel.isWrong('Caju'),
      ResponseModel.isWrong('Côco'),
      ResponseModel.isWrong('Chuchu'),
      ResponseModel.isRight('Abóbora')
    ]
  ),
  new QuestionModel(203, 'Qual é o coletivo de cães?', [
    ResponseModel.isWrong('Manada'),
    ResponseModel.isWrong('Alcateia'),
    ResponseModel.isWrong('Rebanho'),
    ResponseModel.isRight('Matilha')
  ]),
  new QuestionModel(
    204,
    'Qual é o triângulo que tem todos os lados diferentes?',
    [
      ResponseModel.isWrong('Equilátero'),
      ResponseModel.isWrong('Isóceles'),
      ResponseModel.isWrong('Trapézio'),
      ResponseModel.isRight('Escaleno')
    ]
  ),
  new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
    ResponseModel.isWrong('Castro Alves'),
    ResponseModel.isWrong('Manuel Bandeira'),
    ResponseModel.isWrong('Carlos Gomes'),
    ResponseModel.isRight('Dom Pedro I')
  ]),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
    ResponseModel.isWrong('Perder'),
    ResponseModel.isWrong('Fracassar'),
    ResponseModel.isWrong('Desprezar'),
    ResponseModel.isRight('Conseguir')
  ]),
  new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
    ResponseModel.isWrong('Argentina'),
    ResponseModel.isWrong('Espanha'),
    ResponseModel.isWrong('Brasil'),
    ResponseModel.isRight('Portugal')
  ]),
  new QuestionModel(
    208,
    'Qual foi o último Presidente do período da ditadura militar no Brasil?',
    [
      ResponseModel.isWrong('Costa e Silva'),
      ResponseModel.isWrong('Emílio Médici'),
      ResponseModel.isWrong('Ernesto Geisel'),
      ResponseModel.isRight('João Figueiredo')
    ]
  ),
  new QuestionModel(
    209,
    'Seguindo a sequência do baralho, qual carta vem depois do dez?',
    [
      ResponseModel.isWrong('Ás'),
      ResponseModel.isWrong('Nove'),
      ResponseModel.isWrong('Rei'),
      ResponseModel.isRight('Valete')
    ]
  ),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
    ResponseModel.isWrong('Vela'),
    ResponseModel.isWrong('Vento'),
    ResponseModel.isWrong('Vênia'),
    ResponseModel.isRight('Veia')
  ]),
  new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
    ResponseModel.isWrong('Abrupção'),
    ResponseModel.isWrong('Abolição'),
    ResponseModel.isWrong('Abnegação'),
    ResponseModel.isRight('Ablução')
  ]),
  new QuestionModel(
    212,
    'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?',
    [
      ResponseModel.isWrong('Monte Branco'),
      ResponseModel.isWrong('Monte Fuji'),
      ResponseModel.isWrong('Monte Carlo'),
      ResponseModel.isRight('Monte Everest')
    ]
  ),
  new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
    ResponseModel.isWrong('Estômago'),
    ResponseModel.isWrong('Pâncreas'),
    ResponseModel.isWrong('Rim'),
    ResponseModel.isRight('Pescoço')
  ]),
  new QuestionModel(214, 'A compensação por perda é chamada de...', [
    ResponseModel.isWrong('Déficit'),
    ResponseModel.isWrong('Indexação'),
    ResponseModel.isWrong('Indébito'),
    ResponseModel.isRight('Indenização')
  ]),
  new QuestionModel(
    215,
    'Que personagem do folclore brasileiro tem uma perna só?',
    [
      ResponseModel.isWrong('Cuca'),
      ResponseModel.isWrong('Curupira'),
      ResponseModel.isWrong('Boitatá'),
      ResponseModel.isRight('Saci-pererê')
    ]
  ),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    ResponseModel.isWrong('Marechal Deodoro'),
    ResponseModel.isWrong('Barão de Mauá'),
    ResponseModel.isWrong('Marquês de Pombal'),
    ResponseModel.isRight('Duque de Caxias')
  ])
]

export default questions
