import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import { depositAccount, registerAccount, withdrawAccount } from "../api/api";

import AccountModal from "../components/AccountModal";
import CustomHeader from "../components/CustomHeader";
import OperationCard from "../components/OperationCard";

import { accountSchema, transactionSchema } from "../schemas";

import account_balance from "../assets/account_balance.jpg";
import account_creation from "../assets/account_creation.jpg";
import account_deposit from "../assets/account_deposit.jpg";
import account_withdraw from "../assets/account_withdraw.jpg";
import black from "../assets/black.png";
import BalanceModal from "../components/BalanceModal";
import TransactionModal from "../components/TransactionModal";
import BlockModal from "../components/BlockModal";

function Dashboard() {
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [balanceModalOpen, setBalanceModalOpen] = useState(false);
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const openAccountModal = () => {
    setAccountModalOpen(true);
  };

  const openBalanceModal = () => {
    setBalanceModalOpen(true);
  };

  const openDepositModal = () => {
    setDepositModalOpen(true);
  };

  const openWithdrawModal = () => {
    setWithdrawModalOpen(true);
  };

  const openBlockModal = () => {
    setBlockModalOpen(true);
  };

  return (
    <Stack flex={1}>
      <CustomHeader />
      <Stack
        sx={{
          bgcolor: "primary.dark",
          height: "25rem",
          borderBottom: "5rem solid background.whiteFixed",
          alignItems: "center",
          justifyContent: "center",
        }}
        spacing={4}
      >
        <Typography mt={30} variant="h2" textAlign="center">
          Qual operação gostaria de executar?
        </Typography>
        <Stack width="100%">
          <Stack
            direction="row"
            spacing={3}
            alignItems="flex-end"
            alignSelf="center"
            width="90%"
            overflow="auto"
            mx={10}
          >
            <OperationCard
              alt="Criar Conta"
              image={account_creation}
              title="Criar Conta"
              text="Operação de criação de conta para possibilidade das demais operações"
              function={openAccountModal}
            />
            <OperationCard
              alt="Consultar Saldo"
              image={account_balance}
              title="Consultar Saldo"
              text="Consulta de saldo disponível em conta"
              function={openBalanceModal}
            />
            <OperationCard
              alt="Depositar Saldo"
              image={account_deposit}
              title="Depositar Saldo"
              text="Executa o armazenamento de saldo em conta"
              function={openDepositModal}
            />
            <OperationCard
              alt="Sacar Saldo"
              image={account_withdraw}
              title="Sacar Saldo"
              text="Executa a retirada de saldo em conta"
              function={openWithdrawModal}
            />
            <OperationCard
              alt="Bloquear Conta"
              image={black}
              title="Bloquear Conta"
              text="Executa o bloqueio da conta e bloqueio das demais atividades da conta"
              function={openBlockModal}
            />
          </Stack>
        </Stack>
        <AccountModal
          schema={accountSchema}
          accountFunction={registerAccount}
          title="Criar conta"
          open={accountModalOpen}
          setOpen={setAccountModalOpen}
        />
        <BalanceModal open={balanceModalOpen} setOpen={setBalanceModalOpen} />
        <TransactionModal
          title="Depósito"
          description="Insira o identificador pessoal para depósito, e então digite o valor
          desejado ao campo abaixo"
          buttonText="Depositar"
          setOpen={setDepositModalOpen}
          open={depositModalOpen}
          schema={transactionSchema}
          submitFunction={depositAccount}
        />
        <TransactionModal
          title="Saque"
          description="Insira o identificador pessoal para sacar, e então digite o valor
          desejado ao campo abaixo"
          buttonText="Sacar"
          setOpen={setWithdrawModalOpen}
          open={withdrawModalOpen}
          schema={transactionSchema}
          submitFunction={withdrawAccount}
        />
        <BlockModal open={blockModalOpen} setOpen={setBlockModalOpen} />
      </Stack>
    </Stack>
  );
}

export default Dashboard;
