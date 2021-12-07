def my_awesome_decorator(fun):
  def wrapped(*args):
    args_increase = (arg+1 for arg in args)
    return not fun(*args_increase)
  return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
  return all([True if number % 3 == 0 else False for number in numbers])
