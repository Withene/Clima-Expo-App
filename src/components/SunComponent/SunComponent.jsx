import { Box, Flex, HStack } from "@react-native-material/core";
import { Title } from "../../pages/Home/styled";
import { ProgressBar } from "react-native-paper";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SunComponent = () => {
  const sunProgress = useSelector(state => state.sunProgress);
  const [progress, setProgress] = React.useState(0);

  function calcularPorcentagemDeTempoPassado(
    tempoInicial,
    tempoFinal,
    tempoAtual,
  ) {
    function converterParaMinutos(tempo) {
      const [horas, minutos] = tempo.split(":").map(Number);
      return horas * 60 + minutos;
    }

    const minutosInicial = converterParaMinutos(tempoInicial);
    const minutosFinal = converterParaMinutos(tempoFinal);
    const minutosAtual = converterParaMinutos(tempoAtual);

    const porcentagemPassada =
      (minutosAtual - minutosInicial) / (minutosFinal - minutosInicial);

    const porcentagemFinal = Math.min(1, Math.max(0, porcentagemPassada));

    return porcentagemFinal.toFixed(2);
  }

  function obterHorasAtuais() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, "0");
    const minutos = agora.getMinutes().toString().padStart(2, "0");

    return `${horas}:${minutos}`;
  }
  useEffect(() => {
    if (sunProgress[0] && sunProgress[1]) {
      setProgress(
        calcularPorcentagemDeTempoPassado(
          sunProgress[0],
          sunProgress[1],
          obterHorasAtuais(),
        ) - 0.0001,
      );
    }
  }, [sunProgress]);
  return (
    <Box w={"100%"}>
      <Box pl={"5%"} mb={"1%"}>
        <Title size={"15px"} align={"left"} font={"Poppins_300Light"}>
          Sun Progress
        </Title>
      </Box>
      <Box h={20} ml={"5%"} mr={"5%"} style={{ alignItems: "center" }}>
        <Flex fill w={"100%"}>
          <ProgressBar
            progress={progress}
            color={"#DBA220"}
            style={{ width: "100%" }}
          />
        </Flex>
      </Box>
      <Box ml={"5%"} mr={"5%"} mt={-10}>
        <HStack justify={"between"}>
          <Title size={"15px"} align={"left"} font={"Poppins_300Light"}>
            {sunProgress[0]}
          </Title>
          <Title size={"15px"} align={"left"} font={"Poppins_300Light"}>
            {sunProgress[1]}
          </Title>
        </HStack>
      </Box>
    </Box>
  );
};

export default SunComponent;
