import random

def random_number_generator(n, l):
    if n > 0 and l > 0:
        start = (10**(l-1) if l>1 else 0)
        end = (10**l)-1
        list = []
        
        if n > end-start:
            print(f"{l} basamaklı en fazla {end-start} adet sayı üretilebilir")

        while True:
            if len(list) < (n if n<=end-start else end-start):
                random_number = random.randint(start,end)
                if random_number not in list:
                    list.append(random_number)
                    yield random_number
            else:
                break
    else:
        raise ValueError("Başlangıç-Bitiş değeriniz 0 veya negatif olamaz")

generator = list(random_number_generator(124,2))

print(generator)
