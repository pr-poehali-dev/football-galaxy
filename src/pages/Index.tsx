import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const matches = [
    { home: "Спартак", away: "Динамо", score: "2:1", date: "29 июля", status: "Завершен" },
    { home: "ЦСКА", away: "Зенит", score: "vs", date: "30 июля", status: "Скоро" },
    { home: "Локомотив", away: "Краснодар", score: "1:0", date: "28 июля", status: "Завершен" }
  ];

  const news = [
    { title: "Главный тренер подписал новый контракт", date: "29 июля", category: "Новости" },
    { title: "Трансферное окно: новые подписания", date: "28 июля", category: "Трансферы" },
    { title: "Подготовка к новому сезону в разгаре", date: "27 июля", category: "Тренировки" }
  ];

  const standings = [
    { team: "Спартак", games: 20, wins: 15, draws: 3, losses: 2, points: 48 },
    { team: "ЦСКА", games: 20, wins: 13, draws: 4, losses: 3, points: 43 },
    { team: "Зенит", games: 20, wins: 12, draws: 5, losses: 3, points: 41 },
    { team: "Динамо", games: 20, wins: 10, draws: 6, losses: 4, points: 36 }
  ];

  const players = [
    { name: "Александр Соболев", position: "Нападающий", number: 9, goals: 12 },
    { name: "Дмитрий Тарасов", position: "Полузащитник", number: 8, goals: 5 },
    { name: "Георгий Джикия", position: "Защитник", number: 5, goals: 2 },
    { name: "Сергей Песьяков", position: "Вратарь", number: 1, goals: 0 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/img/52b00df2-cbb8-4c31-8eb4-1012a97cb063.jpg')` }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            ФУТБОЛЬНЫЙ КЛУБ
          </h1>
          <p className="text-xl md:text-2xl font-opensans mb-8 text-orange-100">
            Энергия • Страсть • Победа
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold">
              <Icon name="Calendar" className="mr-2" />
              Расписание матчей
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold">
              <Icon name="Users" className="mr-2" />
              Наша команда
            </Button>
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Матчи
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {matches.map((match, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in border-l-4 border-l-primary">
                <CardHeader className="text-center pb-2">
                  <Badge 
                    variant={match.status === "Завершен" ? "default" : "secondary"}
                    className={match.status === "Завершен" ? "bg-secondary" : "bg-primary"}
                  >
                    {match.status}
                  </Badge>
                  <CardTitle className="text-sm text-gray-600">{match.date}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">{match.home}</div>
                    <div className="text-2xl font-bold text-primary mx-4">{match.score}</div>
                    <div className="text-lg font-semibold">{match.away}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.map((player, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    {player.number}
                  </div>
                  <CardTitle className="text-lg">{player.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary font-semibold mb-2">{player.position}</p>
                  <div className="flex justify-center items-center gap-2">
                    <Icon name="Goal" size={16} className="text-primary" />
                    <span className="text-sm text-gray-600">{player.goals} голов</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="news" className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-8">
                Новости и галерея
              </h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="news" className="text-lg">Новости</TabsTrigger>
                <TabsTrigger value="gallery" className="text-lg">Галерея</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="news" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-6">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <Badge className="w-fit bg-primary">{item.category}</Badge>
                      <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{item.date}</p>
                      <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                        Читать далее <Icon name="ArrowRight" className="ml-1" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gallery" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="/img/c504bd99-5c97-4484-b9f4-120dbda03194.jpg" 
                    alt="Team celebration"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="/img/52b00df2-cbb8-4c31-8eb4-1012a97cb063.jpg" 
                    alt="Stadium action"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white flex items-center justify-center h-64">
                  <div className="text-center">
                    <Icon name="Camera" size={48} className="mx-auto mb-4" />
                    <p className="text-lg font-semibold">Больше фото скоро</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Standings Table */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Турнирная таблица
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <Card className="overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">#</th>
                    <th className="px-4 py-3 text-left font-semibold">Команда</th>
                    <th className="px-4 py-3 text-center font-semibold">И</th>
                    <th className="px-4 py-3 text-center font-semibold">В</th>
                    <th className="px-4 py-3 text-center font-semibold">Н</th>
                    <th className="px-4 py-3 text-center font-semibold">П</th>
                    <th className="px-4 py-3 text-center font-semibold">Очки</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((team, index) => (
                    <tr key={index} className={`border-b hover:bg-gray-50 transition-colors ${index === 0 ? 'bg-green-50' : ''}`}>
                      <td className="px-4 py-3 font-semibold text-primary">{index + 1}</td>
                      <td className="px-4 py-3 font-semibold">{team.team}</td>
                      <td className="px-4 py-3 text-center">{team.games}</td>
                      <td className="px-4 py-3 text-center text-secondary font-semibold">{team.wins}</td>
                      <td className="px-4 py-3 text-center">{team.draws}</td>
                      <td className="px-4 py-3 text-center text-red-600">{team.losses}</td>
                      <td className="px-4 py-3 text-center font-bold text-primary text-lg">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4">Контакты</h3>
              <p className="text-gray-400">+7 (495) 123-45-67</p>
              <p className="text-gray-400">info@football-club.ru</p>
            </div>
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4">Адрес</h3>
              <p className="text-gray-400">ул. Спортивная, 1</p>
              <p className="text-gray-400">Москва, 123456</p>
            </div>
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4">Социальные сети</h3>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Youtube" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">&copy; 2024 Футбольный клуб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;