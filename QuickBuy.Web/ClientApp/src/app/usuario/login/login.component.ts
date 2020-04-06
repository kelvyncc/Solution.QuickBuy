import { Component } from "@angular/core";
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]

})

export class LoginComponent {
  public enderecoImagem = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQDw8PFRUVEBUQDxAVEA8PERAQFhUWFhcVFRUYHSggGBolGxUVITEhJSsrLi8uFx8zODMsNygtLisBCgoKDg0OGhAQFy0dHR8rLS0tLSstLS0tLS0tLS0tLS0tKy0tLSstLS0rLSstLS0tKy0rLSstLS0tLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUGBwj/xABBEAABAwIDBAcFBAgGAwAAAAABAAIDBBEFEiEGMUFRBxMiYXGBkTJCUqHBFGJysSMkM3OCstHwNHSSouHxFUOj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EADQRAQACAgEDAgQDBgYDAAAAAAABAgMRBBIhMQVREzJBYSJxgQYUM5GhwSNCsdHh8BU0Uv/aAAwDAQACEQMRAD8A9xQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQa7HsZhooTNM7QaNaLZpHcGtHEql7xSNy6ONxr8jJFKR/w81j6VaoOJdTU5bfRodIxwHIu1v6Lj/e59n0k/s7j1/Enf5NpB0sRadbSSi/wvY70zWutI5cfWHJf9n771XJH6ttTdJeHP9p00Z5PiJt5sJCvHJxy5b+h8uviIn8pbWn2ww5+6tpx3OkbGf8AdZaRmpP1ct/TuVTzjn+TawVkUgvHJG4cC17XfkVeJiXLbHevmJhfUqCAgICAgICAgICAgICAgICAgICAgw6/FaenF554o/xPa0+irNojzLXHgyZO1KzLmMR6SqCO4jMsx+4wtaf4n2WNuTSPHd6eH0PlX+aIr+f/AA1mHdKbHzBs9P1cR06wPMjmHm4WHZ8FSvLiZ7xqHVm/Z/JXH1Ut1W9noVPOyRofG4Oa4BzXA3DgeIK6onb5+1ZrOrRqYXFKrCxjFIqSF087rNaPNzuDWjiSq2tFY3LbBgvnvFKRuZeF7T7Qy18xkk0aLiKK/Zjb9XHiV5eXLN52+74PBpxcfTHefrK/sbsy/EJsurYmEGeTkPgb94/LerYcU3n7MvUvUK8XH2+afEf3dP0h49DDGMNo2sAa0MmcADkbb9m0/FzP1Om/IyRWOiry/SOHky3/AHrLM/b7z7uBw6hkqJWQQtzPe7K0cOZJ5AAEnwXJWs2nUPoc+emHHOS89odvtjszh+H0rAesdUuGVhEjgHuHtPLDcBovuHcO9dWXFjx1+7wfT+fy+XnnWopHnt/TbgGHLq0kHmDY/JccTMPorVi3a0bdb0bYjO7E4YftE5Zllc+MyyOYQI3Wu0m28g+S6uNa037y8L1rHirx5mtIie3fUe72mWVrBd7mtHEkho9Su+Z0+Qis27RG2jrttMOhuHVcZI91l5Tf+EG3ms7ZqR5l24vTeVk+Wk/r2c9XdKlM3SGnmk73FsTfqfksrcuseI29DF+z+e3e9or/AFaWTpFxGodlpKZg4dmOSocPPQDzCy/eb2+WHbHonFwxvNk/0hpoNu8Sjm6x05fY2dE5rRGeYsALFZxyMkT3dtvRuJfHqtdb+r03ZbbSmrrMv1c1tYXHU97He8Pn3Ltx5q3/ADfM830zNxZ3PevvDpls80QEBAQEBAQEBBj11dFAzrJ5GRtvbM5waL8teKiZiI3K+PHbJbppG5ctiHSTh8VxG6SU/cYQ3/U6wPldYW5NI+71MPonKv3mOmPv/s5iv6U6h/Zp6aNmtmue50rj/CABfu1WNuXP0h6mL9nscd8l9/ktupMfrAXSyvhjtcl72UrGt46MGb1TpzX8zo+L6Xx51SvVb+f+vZrGbMUIdabGKYPJ7RbGZBfveXAeap8Gm+93RPqPI6d4+PMR9za7YqTD4xN18ckZcGXt1bw47uzc3G/ioy4OiN77NPT/AFavKv8ADmurf0cqud67oNlNrJ8PdZvbhJu+Amw13uYfdd8j81tizTT8nm8/0zHyo34t7/7vYKDaWmnpnVUcl2MYXyi3bjyi5Dm776ea9CuSto3D47Nw8uLJ8O8amXjG1e1D8RmzuNo23EEVx2R8R5uPE+S8/Nkm8/Z9l6dwsfFpqO9p8y0yxei7rYbbiKih+zTxPy5nOEsdi7tHUObp6hdWDPFI6ZfP+qek5ORk+Ljnv7SwpsHwmVxfFirmBzi7LNA8uBJue0bX/vVRNMVp3FmleTz8VYrbBvXtLdYDiWEYUHPjqH1MzhbM2Nw7I91t+y0c7m5WlLYsXidy4+Tg5/PmItTorH3/AOy4nH8YlrZ3Ty7zo1l7tjYNzR/epJXLkvN7bl73D4tONijHX9Z92qnkyi/p4qsRt0Xt0xtawnEpIJOsje9jyCBI0kODXb/IrTvXvDh1jyxrJG4ZlRO6U5pHuefie5zz6lZzMz5dmPHSkfgiI/JscEdQA2rWVR5GJ8eUfwkA/NXx/D/zOblxy5j/AAJj9fP+zdDZihqNaHE47n2YahvVPvyzafl6rX4NLfLb+bh/8jysPbPh/Wvd2XRrgtVRGeKojAa7I9j2va9jnC4NiNd1t4C6OPjtTcS8f1jl4eT0Wxz3jzt5ptVSdTXVEfATvc38LznA9HW8lxZq6vMPp/TsvxONS321/Ls1QPEbwbg7iCNxCzdkxExqXfbK9I8sNoq3NLHuEw1lYPvD3x37/FdeLkzHaz53neh1vu+DtPt9HqVBXRVEYlhka9h3OabjwPI9y7q2i0bh8vlxXxW6bxqWSpZiAgICAgICDk+lCm6zDJjxYWSg8srxf5XWOeN0l6PpWTo5VZ9+383h8b7rzJh91S+01C70TYPbjKBR1zrsPYimdrlB0ySE729/rouzByP8tnzXqnpPnNgjv9Y/vDb7RbPU9BGaqjw2Gchxe4Pc97YRvDmR7i0chay1vjrSOqtduHi8vLybRhzZprHj8/1aHCtscTrJWAUlPUNzWLRTuyNB0NpC4hvmsqZsl58bd/J9N4fHpM/Emtvz/s2nSdhuHRQZmsijqSQY2xhrXPHvZ2je23HwVuTWkV+7n9Fz8q2XW5mn128uXC+sXqWrkizGN7m52OjfY6OY4EEOHEaq1bTXwxzYMeWNXjemmljyG17jh/yrR3YWjplJj+9NEWXWynmo1C8Xn3XBOe5RpeMspCfuUaWjKkJh3ppb4kMKteXXI3Df3XNlesOXNk2t1bv0ng1g9GBXly4pX4JiPDks5h2Y8kwzWuB1Co6otE+FSES2mDbQVVI4OgmeAP8A1Oc50ThyLL29LFaUy2pPaXHyeBg5EatXv7x5dnXYrhWKwdZVOFLUtAGewLj4W/aM36HUd29dM2xZY/F2l4ePj87gZNYo66T/AN/SXnczA1xaHBwBsHgOAcOYBF1xTGpfTUtNqxMxqfZBFmfg2Oz0UnWU8uU+8w9qN/4m8fzV6XtSdw5OVxcPIr05I/X6va9i9pP/ACNOZuqLC15jeL3a5wAN2HfbXivTxZOuu3xPO4n7tl6N7hv1o4hAQEBAQUug1m0lL11HURfHTyNH4spt87Kl43WYb8a3Rlrb2mHzjExxaZGg5W5czuDS6+W/K9ivM0+664iY795Xo33Wcw66W6k0Wdfs90gVNJB1DmNmA0iL3EGMfCdO0OXJdGPk2rGp7vF5fouLPk66z0+7DxDbqvlGUTNhbwZCxsdh+LV3zUW5F58dmuL0ji4+9o6p+8ualqS4lznOc473OJc4+JOpWPefL0ImlI1WNLRmKnSJyStl196lnMzLHqju8VNWWR0WwkEcj5WyMY8ZWEBzQ62rt19y2xxEz3ebz72rWJrOmvx6JsdVKxjQ1rX2a0bgLA6eqzvGrO3i3m2Ksz5ZOzODismMJkLLROkDg0O1BaLWuPiU0p1TpXl8n4FOrW1vH8KNHOYDIH2Y1+YNLNHX4XPJRenTOluLyIz4+uI01yo6UJXfoJO97B+ZWlfDkyz+KGNWftXeQ+QUypjbnFmAxwTNAHWR2ktxe2w9d/ol47RKePaeq1Z+jBjeRqFk7a2mPDLjkB/oqzDpreJSLgOKjSZtEIGYKdKTkhAylTpWckolx5opNplFSh7p0U0+TC4iRq98sh8DI4D5NC9HjxqkPjfVr9XKt9tR/R191s81VAQEBBQlBElQlB+oIPEWKLQ8Q2OEcNVWQTMzRiGdj47XzCGTdbwzLhx6i0xL6fndVsOO9J79v6tFj+HCmnyxuzRuaJaeTeHxO1GvMag+CyvXUvQ4meclNz2tHaWF13cstO/4qLpDzU6Um8yh/fipVmfdtqHZqtmF2U0luDnjqgfDNa6vGO0/RyZOdgx9ptDFxTCaimcGzxOZf2ToWu8HDRRak18tMPIx5o3SdsJVbMer3DxVqssnh0WwDv0sn7tv8x/qtsXl5nqHyQwtpv8AGTfjH8jVnk+aXZw5/wAGrcdG5/XHf5d/88avh+Zzeq/wf1Q6QT+vH9zH9VGb5l/S/wD1/wBXN3WT0VmTWIjnM0f7StK+HFln8X6MeZ95HH7x+WiSjH4b6EGWgAAJdHUAAcbP0FvNwU+aqb6M+5+sNzjWE09NQxh4/Tk6OadXOOrwebANPTmpvWK1+7Pj58mXPOvlcs1YPWhNEty/ZesbTmpdFaMMEl87S4sNu0GgnSxv4K/wra24/wB/wTk+HE92naCSAASSbADUkncAqOuZ1G5dzi2G0+G0LA+KN1ZK0jO4B5iJF3OaDoMtwAbbyF0WrFK/d4mDNl5fInUzFK/1cI42Hkud7b6O2ap+po4Ih7sDB55RdepSNViHwvJv15bW95ltAVZz6SBUoVQEEboKEqEokotpbc5Qs8ckhEOPyR7myySA+E0Zcf8AcVxz2y/m+j31cCJ/+f7MTavBHU1DTB7muMc0sTHg3zQPJkZfwtu4XUZKdNYX4HJjLntqNbiP5uSXO9gRL1Do2pITSCXqo+s6x7XSZWl5ANwMx1GhHouzBWOnenzPq2W/x+jqnTSVvSHVdbljhhAD8uQh73uINrZrgAnwWc57b7OrH6Ri+H1WtPjbcdJkzPsbWutndK0xjiLA5j6G3mr55jpcvpFbRnmY8Rt5guR9Ix6vcPH6FWqzy+G82GlAncOcenkQVtj8vN50bxwhtXGW1chI0dlc08xkaPzBVMkfidHBtE4Yj2bPo5P647/Lv/njVsPzMPVP4P6re3x/Xnfuo/yKrm+Zp6Z/A/VzpWb0EYntETnHe2TM0c3ZbD81rXw4M++proykpo7HYOSzpQ62UBjzfgQTqrY3Pzo7V15a/HcUNTMX65R2YhyYDv8AE7/+lne3VLt4uGMVNfVhMWbqhNEvT+jfFhPTuo5bExizQfegdpbvsbjwIXXgtuvTL5n1bjziyxmr9f8AVg7ObKfZ62aWfSGmOaJztz7jMHd+Vu/v8FFMWrTM+Ib8rn/FwVpT5reXJbS4y6sqHTG+X2Ymn3Yxu05nefFYZL9U7erw+NGDFFfr9WDRU/WyxxfHIyM+DnAH5FVrG5iG2W/RSbe0PpRhXqPhphcBUqaSBRCQKlVJBAlQlAlFtIOKhaIWnuRaIeSbe3hxiCYbnCF9+9sjmn5ZfVceXtkiX0HB1bh3r+bXY3nkjqoHFx+yVJniFzbqJXkObb7uZpHcSq33MTHs14/TS1Lx/njX6w5QLB68CD03otmvTSN+Gf5Oa0/1XXx5/C+a9arrLWfeFmWXB6GdzyXPm6xznaOlMbySTYey0380mcdJ+61Y5vJxxEdqs6vw6kxWDr482bKWxSXc1zHD3XNva11a1a5I2xxZc3CydE+Pq8oXG+o2sVfs+YU18ssvyoUdQ6Nwew2c03ae9X8MJrFo1LtafaOjqGBlbFYjjlc9o72lvaatOus/M4J4mbFO8UtnQ4thdI0mBwud4aJZHu7ru3DxICtFqV8MMmDlZ51dxmNYiamd8xFsxAa3fZoFgPGwXPe3VO3tcfD8LHFGESqtmFHFneG8N7vALasPP5FtLcjC15B5kjwS0K4rbdPss7LDVO5Qn+V6V8Sjkd70j7tM1ZPShdjVV4TRLY7O4g+nqopWanOGFu7O15ylvz9QFfHaa2hzcvFXLhtWfZ3vShiLo6eOBpt1znZ+ZYyxI8LuaunkW1Gnhej4Ytkm8/R5guN9M3uw0GfEaccBIXnwYxzh8wPVaYo3eHHz7dPHt93u8b16D5GYX2lSpMLgKlSUwUVSUoWyoXhAlQtC04otDHlksoXiHm/SfQumEcrAbxhwsN5abHTv0XPmrvu9j07LGOZrPiWLgeJU9XDPJLlbU/ZHxTahrZ2BvZfbidAD/wBKtbRaJ35TyMOXFesU703uPs4Bq5XvwqiXe9FUv+JZ+5cP/oD9F08efLwfWq/LLRbQYTPLiE7IYZHXlzXDTlGYB1y7cN6pekzedO3i8nHTjVm1tdnVRStwmgySPaZXZnNaD7UruX3W6XPd3rXfw6d3lzE83k9VY/DDzK65X0asVP1pyEnX6K1PLDkT+DszBs4/3X+o/otemHBGa0IPwGob7oPgf6qs0a15UfWGNJSSs9qN4/hJHqFXplvXkUn6rWZRMNYvE+JHHQ+ChaZ7Nhg+HEjMRqdfLgtojs8vJbdmRWYRnG6x4FSpvU7hpQJIXFpJaS0tPJzTvHeFnMTDsx2reFWqjqhejUS0hJQs2GzrA6sgad3XsJ8Ab/RXpH4oc3LmYw217Og6TMQjmnibHIx4jjfmyuDg1znN0NuNmha57RMxpwekYbY8dptGty466wevt2HRbDmrHP8AggPq5wH0K2wR+J5nql/8KI95evwrsfNyymKzOV1pRSUwpVlK6IQKLQtuKheFmQqFoYcwUS1hpcZp8zPNZ3js6cVu7yrafBupcZGDsE9ofCTx8FzXr9Ye1xORv8FmkBWT0YLqEui2KxuKjklfNms6MABozEuDr2+ZWuK8VmdvO9R4189axX6S2GJ9IUrrimiawfG/tv8A9I0B9Ve2efo58PpNY/iW25CtrZJnmSaRz3Hi438hyHcFlMzM93p0pTHXVY1C7SYVPL7EZt8R7IUxSWN+VSPHd0OE7MmNwfI+5HACw/5WkViHHl5Nrxrw6KOjHAK7l6l8UB5fkp0r8SEH0PMKNLRfbGmwiN/tRtPi0FRpaLMCTZanOuS3gSB6KOmF/j3jttmR4a1oAAVtMupB1H3KNLRZq8VwZsrd1iNx5FJhet5rO4cfPA6JxY8WI9COYWNo09LFli8dkmblSXVHhW6J2oXJEKTaI8sqlw2eT2InW5nsj5q8Y5lzX5eOv123VFshI79o8DuaLn1KvGOPq5b860/LGnf7GYJHShxYNXWDnHUm3fy1W+OsR4eXyst766pdjGtnDK+1SpK41FZTClWUkVQcoXW3ItC08KFmPI1F4YNdHdh8FSfDXHPdzdfQCRhuLjUOHcstdnZW+peY4zhjqeS2uU+wfoe9c966e3xc/wASNT5a8lUdUyv0tFLKf0cbj32s31OivFJlz35FK+Zb2h2PkdrK+33W6n1KvGP3cd+bM/LDo6DZuGLVsYv8R7R+avFdOS+W1vMtqyjA4KdM+pdFOp0ibLtPBqpiGdrdl+VhB0UyrCUTM2hCmCZ0sSU1jZVmFottAwJpPUiafciOpZdTKNLRZF9F2d3FNdkxfu0uMbPCdtrWPuu4gqJrtrTN0zuHLx7LVd8pYAAfaJ0PeFl8KdvQ/f6a7eW1o9jOMrye4DKFaMcQ578y9vHZvqHZ6GP2Yx4nU+pV4hzWvNvM7baKiA4KdM+pkx06nSs2bnDobN8yVpWOzmyW3LZRhXYSvNClSVwBFUgpVlJEIkKFkCEStuCLQtOYoWiVmWG4I7lErxLUCDQ9xB+izdHV3ajGNno52ljr2OoItcciO9VtWJbY880ncNTSbFwRa5S8832d8tyrFIhvbl3v5luIcNA0A8BZTpjORnR4fbfordLOcq+ykYd35q2oUnJK0+nsbKswtFtqdUh1JwxaqYVmeyc0WvkkorPZKni18kgtPZSeLtFJKz2WzEoW2p1G7wU6RtEQJo6l6Sns3zUzCIt3Wep7lVbqOoHJNJ6j7Omk9TJpKcamytWGd7rYiVVtrjY0RttqeOzR4LWPDmtPdkNapUlcaFKspgIqkFKqSCJRKJChKJCJ2iWonaBaoTtrwyznC3NU+rffaFueMaW5KJTWVoxKF9qMi1HihM9l6ph3K0qVspBBbU8kiC1t9lt7bm6haOyPVqE7VY2xupRKbxc3SUR2Tp2a+SmEWnsTs7SiSs9lsxottfpae4JPLKFMQztbS11WU6qPC29wBlwfVDelvq1C21erRO1erQ2y4IbDXjqrxDK1u6w+GxsqzC8W3A2NCZbZrVo5plIBSrtMBEJBShUBFVUAhEo2QUIRKhChKJCJ2xaiKxzDzVZj6tK232WZoxYEKJheJWsqqtsyqTbKl0F1aWcd5Rhub3UQm3bwx3t1VV4kYzUeKmCZZjqZp4emivqGXXK26jHAqOlb4iBpHdxUdKeuFsxEbwVGk9UKBl9ETtsGR2FleGMztCaDMO/gUmNlbaYjGWNj4FUazO4QyInauVQna5DFc67hvUxCtrKud2rjhuTaIjsnMWndvUyiu4RgZ2h4qI8ptPZsAFo59pAKRWyIVCISCIFKBEqEKBSyJUsiVLIbULVCdsKaLKe7gqTDattreVQsZUGQXttrr3K21NStSPJ03BRtaI0oyAngmibRC+ylA36/krRVSb7XrKVCyGyyGyyG1Mg32CaNylZAsgszwX1G/wDNRMLVtpiZVRqZUE82lh5qUa77GxE7gmibRC+yl5n0VulScnsvsiA3BTpnNplOylCtkQrZEKoClCqBZBRAsiVLKBSyJLIISR3FvRRMbTW2pYRbbeqN4nYGona6ynJ36KYqpN4XmQgcFbTObTK5ZSjZZBSyCtkFLIFkCyG1bIFkNlkNrE8N9R5qswvW/ui2m5lIqmcnsvNhaOCnSk3mU7KVdq2QLIK2RCtkBShVAQVQEFECyCiAgKElkFt8IJuomFotMJNYBuCnSJnatkQWQLIKWRJZAsiCyJLIFkCyBZAsiFbIFkCyBZBWykEQIKoFkFUBAQEBAQEFECyAgIKICAgICAgICJEBECJEQICAgIKoFkCyCqAgICAgICAgICAgICAgogICAgICAgIKICCqAgICAgqgICAgICAgICAg/9k=";

  public usuario = new Usuario();

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {

    if (this.usuario.email == "kelvyn" && this.usuario.senha == "abc123") {

      
    }

  }

  

} 
