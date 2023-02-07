from collections.abc import Iterable, Iterator


class Carta(Iterable):
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)

    def __iter__(self):
        return f"{self.valor}, {self.naipe}"


class Baralho(Iterator):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.count = 0

    def __len__(self):
        return len(self._cartas)

    def __next__(self):
        result = self._cartas[self.count]
        if not result:
            raise StopIteration()
        else:
            self.count += 1
            return result


if __name__ == "__main__":
    baralho = Baralho()
    for carta in baralho:
        print(carta)
