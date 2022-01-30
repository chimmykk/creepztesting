import React, { useEffect, useContext, Suspense, useState } from 'react';
import { useContractFunction } from "@usedapp/core";
import { Contract } from '@ethersproject/contracts'
import {lizardAbi}  from '../../assets/blockchain/contract';
import {illiminartiAbi}  from '../../assets/blockchain/illu';
import {armsAbi}  from '../../assets/blockchain/arms';
import {stakingAbi} from '../../assets/blockchain/staking';
import { utils } from 'ethers'
import {Config} from "../../config";
import PopupContext from '../../context/PopupContext';
import {refreshArmsMeta} from '../../plugins/model'

const ModalWindow = React.lazy(() => import('../generic/Popup'));
const MintModal = React.lazy(() => import('../generic/MintModal'));
const StakingModal = React.lazy(() => import('./StakingModal'));
const Bank = React.lazy(() => import('./Bank'));

const creepzAbi = new utils.Interface(lizardAbi); 
const creepzContract = new Contract(Config.contractAddress, creepzAbi);

const aAbi = new utils.Interface(armsAbi);
const armsContract = new Contract(Config.armsAddress, aAbi);

const Interface = new utils.Interface(stakingAbi);
const staking = new Contract(Config.stakingAddress, Interface);

const ILoomi = new utils.Interface(illiminartiAbi);
const loomi = new Contract(Config.illiminartiAddress, ILoomi);



const Popups = ({resetPopup, activeMintModal,setActiveMintModal, setCurrentStep, closeMintModal, setActivePopup, creepzSaleData, shapeSaleData, armsSaleData, collectorsSaleData, activeCollection, activeStaking, setActiveStaking, account, activeBank, setActiveBank}) => {
  const alert = useContext(PopupContext);
  const [isApprovingCreepz, setIsApprovingCreepz] = useState(false);
  const [isApprovingArms, setIsApprovingArms] = useState(false);

  const { state: armsState, send: buyArms } = useContractFunction(armsContract, 'armsPurchase', { transactionName: 'buyTokens' });
  const { state: depositState, send: deposit } = useContractFunction(staking, 'deposit', { transactionName: 'deposit' });
  const { state: withdrawState, send: withdraw } = useContractFunction(staking, 'withdraw', { transactionName: 'withdraw' });
  const { state: creepzApprove, send: approveCreepz } = useContractFunction(creepzContract, 'setApprovalForAll', { transactionName: 'claimReward' });
  const { state: armsApprove, send: approveArms } = useContractFunction(armsContract, 'setApprovalForAll', { transactionName: 'claimReward' });
  const { state: depositLoomiState, send: depositLoomi } = useContractFunction(loomi, 'depositLoomi', { transactionName: 'deposit' });
  const { state: withdrawLoomiState, send: withdrawLoomi } = useContractFunction(loomi, 'withdrawLoomi', { transactionName: 'withdraw' });
  

  const monitorState = (state, type, token) => {
    console.log(state)
    const status = state.status;
    if (status !== 'None' && type !== `approve`) {
      setActiveStaking(false);
      setActiveMintModal(false);
    }
    if (type === `mint`) {
      // eslint-disable-next-line default-case
      switch (status) {
        case 'Mining':
          alert.showPendingTx();
          break;
    
        case 'Success': 
          refreshArmsMeta();
          alert.showSuccessTx();
          break;
    
        case 'Exception': 
          if (state.errorMessage.includes('User denied transaction')) {
            break;
          } else if (state.errorMessage.includes('Not enough passes')) {
            alert.showMaxoutError();
            break;
          } else if (state.errorMessage.includes('mint max 50')) {
            alert.showOverLimit();
            break;
          } else if (state.errorMessage.includes('Insufficient balance')) {
            alert.showNotEnoughEth();
            break;
          } else {
            alert.showErrorTx();
            break;
          }
        }
    }

    if (type === `deposit`) {
      // eslint-disable-next-line default-case
      switch (status) {
        case 'Mining':
          alert.showDepositPending();
          break;
    
        case 'Success': 
          alert.showDepositSuccess();
          break;
    
        case 'Exception': 
          if (state.errorMessage.includes('User denied transaction')) {
            break;
          } else if (state.errorMessage.includes('Staking is not launched yet')) {
            alert.showStakingNotActive();
            break;
          }
          alert.showDepositFailed();
          break;
        }
    }

    if (type === `withdraw`) {
      // eslint-disable-next-line default-case
      switch (status) {
        case 'Mining':
          alert.showWithdrawPending();
          break;
    
        case 'Success': 
          alert.showWithdrawSuccess();
          break;
    
        case 'Exception': 
          if (state.errorMessage.includes('User denied transaction')) {
            break;
          }
          alert.showWithdrawFailed();
          break;
        }
    }

    if (type === `approve`) {
      // eslint-disable-next-line default-case
      switch (status) {
        case 'Mining':
          if (token === `creepz`) setIsApprovingCreepz(true);
          if (token === `arms`) setIsApprovingArms(true);
          break;
    
        case 'Success': 
          if (token === `creepz`) setIsApprovingCreepz(false);
          if (token === `arms`) setIsApprovingArms(false);
          break;
    
        case 'Exception': 
          if (state.errorMessage.includes('User denied transaction')) {
            break;
          }
          setActiveStaking(false);
          setActiveMintModal(false);
          alert.show(
            `Approve Failed!`,
            `Try Again`,
            `internal`,
            ``
          );
          break;
        }
    }

    if (type === `loomiWithdraw`) {
      // eslint-disable-next-line default-case
      switch (status) {
        case 'Mining':
          setActiveBank(false);
          alert.showLoomiWithdrawPending();
          break;
    
        case 'Success': 
          setActiveBank(false);
          alert.showLoomiWithdrawSuccess();
          break;
    
        case 'Exception': 
          if (state.errorMessage.includes('User denied transaction')) {
            break;
          } else if (state.errorMessage.includes('Transfers paused')) {
            setActiveBank(false);
            alert.showBankNotActive();
            break;
          }
          setActiveBank(false);
          alert.showLoomiWithdrawError();
          break;
        }
    }

    if (type === `loomiDeposit`) {
      // eslint-disable-next-line default-case
      switch (status) {
        case 'Mining':
          setActiveBank(false);
          alert.showLoomiDepositPending();
          break;
    
        case 'Success': 
          setActiveBank(false);
          alert.showLoomiDepositSuccess();
          break;
    
        case 'Exception': 
          if (state.errorMessage.includes('User denied transaction')) {
            break;
          } else if (state.errorMessage.includes('Transfers paused')) {
            setActiveBank(false);
            alert.showBankNotActive();
            break;
          }
          setActiveBank(false);
          alert.showLoomiDepositError();
          break;
        }
    }
  }


  useEffect(() => {
    monitorState(armsState, `mint`)
  }, [armsState]);
  useEffect(() => {
    monitorState(depositState, `deposit`)
  }, [depositState]);
  useEffect(() => {
    monitorState(withdrawState, `withdraw`)
  }, [withdrawState]);
  useEffect(() => {
    monitorState(creepzApprove, `approve`, `creepz`)
  }, [creepzApprove]);
  useEffect(() => {
    monitorState(armsApprove, `approve`, `arms`)
  }, [armsApprove]);
  useEffect(() => {
    monitorState(withdrawLoomiState, `loomiWithdraw`)
  }, [withdrawLoomiState]);
  useEffect(() => {
    monitorState(depositLoomiState, `loomiDeposit`)
  }, [depositLoomiState]);


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ModalWindow 
          resetPopup={resetPopup}
        />
      </Suspense>

      {
        activeMintModal ?
        <Suspense fallback={<div>Loading...</div>}>
          <MintModal
            setCurrentStep={setCurrentStep}
            closeMintModal={closeMintModal}
            setActivePopup={setActivePopup}
            creepz={creepzSaleData}
            shape={shapeSaleData}
            arms={armsSaleData}
            collectors={collectorsSaleData}
            activeCollection={activeCollection}
            buyArms={buyArms}
          />
        </Suspense> :
        ``
      }

      {    
        activeStaking ?
        <Suspense fallback={<div>Loading...</div>}>
            <StakingModal 
              setActiveStaking={setActiveStaking} 
              account={account}
              deposit={deposit}
              withdraw={withdraw}
              approveCreepz={approveCreepz}
              approveArms={approveArms}
              isApprovingCreepz={isApprovingCreepz}
              isApprovingArms={isApprovingArms}
            />
        </Suspense>
        : ''
      }

      {/* {
        activeSelectClaimModal ?
        <Suspense fallback={<div>Loading...</div>}>
          <ClaimSelectModal 
            setActiveMintModal={setActiveMintModal}
            closeMintModal={() => setActiveSelectClaimModal(false)}
            openFloorPopup={openFloorPopup}
            openMintPassPopup={openMintPassPopup}
            userMintPassBalance={userMintPassBalance}
          />
        </Suspense>
        : ''
      } */}

    {
        activeBank ?
        <Suspense fallback={<div>Loading...</div>}>
          <Bank 
            setActiveBank={setActiveBank}
            account={account}
            depositLoomi={depositLoomi}
            withdrawLoomi={withdrawLoomi}
          />
        </Suspense>
        : ''
      }


    </>
  )
}

export default Popups;

